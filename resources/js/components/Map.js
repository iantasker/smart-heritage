import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps'
import { GOOGLE_MAPS_API_KEY } from '../variables'
import { MAP_STYLE } from '../mapstyle'
import isEmpty from 'lodash/isEmpty'
import find from 'lodash/find'
import map from 'lodash/map'
import Alert from './Alert'
import Loading from './Loading'
import Narrative from './Narrative'

class LocationWatcher extends Component {
    constructor(props) {
        super(props)
        this.state = this.resetState()
    }

    defaultCoords() {
        return {
            lat: 50.854650,
            lng: 0.576490
        }
    }

    resetState() {
        return {
            watchId: null,
            coords: this.defaultCoords(),
            error: null,
            narratives: [],
            selectedNarrativeId: null,
            events: [],
            selectedEventId: null
        }
    }

    geolocationProvider() {
        return typeof navigator !== "undefined" && navigator.geolocation
    }

    canGeolocate() {
        const provider = this.geolocationProvider()
        const supported = provider && provider.watchPosition && provider.clearWatch

        if (!supported) {
            this.setState({ error: 'Geolocation is not supported by your browser' })
        }

        return supported
    }

    makeNarrativeMarkers() {
        const { narratives } = this.state
        let markers = []
        narratives.forEach(narrative => {
            markers = markers.concat(map(narrative.starts_at, (event) => this.makeMarker('nrt', event, (evt) => {
                this.setState({ selectedNarrativeId: narrative.id, selectedEventId: event.id })
                this.fetch()
            })))
        })
        return markers
    }

    makeEventMarkers() {
        const { events } = this.state
        const markers = map(events, (event) => this.makeMarker('evt', event, (evt) => {
            this.setState({ selectedEventId: event.id })
        }))
        return markers
    }

    makeMarker(keyPrefix, narrativeOrEvent, onClick) {
        const icon = {
            url: narrativeOrEvent.map_icon_url,
            anchor: new google.maps.Point(16, 16),
            scaledSize: new google.maps.Size(32, 32),
            size: new google.maps.Size(32, 32)
        }

        return <Marker
            key={`${keyPrefix}-${narrativeOrEvent.id}`}
            position={narrativeOrEvent.coords}
            title={narrativeOrEvent.name}
            icon={icon}
            onClick={onClick}
        />
    }

    makeCircle() {
        const { coords } = this.state
        const options = {
            center: coords,
            clickable: false,
            fillColor: '#000',
            fillOpacity: 0.2,
            strokeColor: '#FFF',
            strokeOpacity: 0.3,
            strokeWeight: 1,
            radius: 20
        }
        return <Circle options={options} />
    }

    clearNarrative() {
        this.setState({ selectedNarrativeId: null })
    }

    componentDidMount() {
        if (this.canGeolocate()) {
            const geo_options = {
                enableHighAccuracy: true,
                maximumAge: 30000,
                timeout: 27000,
                distanceFilter: 20,
                useSignificantChanges: true
            }
            const provider = this.geolocationProvider()
            const watchId = provider.watchPosition((position) => this.handlePositionChange(position), (error) => this.handlePositionError(error), geo_options)
            this.setState({ watchId })
        }

        this.fetch()
    }

    componentWillUnmount() {
        const { watchId } = this.state
        if (this.canGeolocate()) {
            const provider = this.geolocationProvider()
            provider.clearWatch(watchId)
        }
        this.setState(this.resetState())
    }

    handlePositionChange(position) {
        this.setState({ coords: { lat: position.coords.latitude, lng: position.coords.longitude }, error: null })
    }

    handlePositionError(error) {
        console.error(error.message)

        const code = error.code
        let msg = ''
        switch (code) {
            case 1: msg = 'insufficient permissions'; break
            case 2: msg = 'a device error'; break
            case 3: msg = 'a timeout occurred'; break
            default: msg = 'an unknown error occurred'; break
        }
        this.setState({ error: `'Acquisition of position failed because of ${msg}` })
    }

    fetch() {
        const { narratives, selectedNarrativeId } = this.state
        if (isEmpty(narratives)) {
            // axios.get('/api/narratives', { params: this.state.coords })
            axios.get('/api/narratives')
                .then(res => {
                    this.setState({ narratives: res.data.data });
                })
        }

        if (selectedNarrativeId) {
            axios.get(`/api/narratives/${selectedNarrativeId}/events`)
                .then(res => {
                    this.setState({ events: res.data.data });
                })
        }
    }

    renderNarrative() {
        const { narratives, selectedNarrativeId, events, selectedEventId } = this.state
        const narrative = find(narratives, { id: selectedNarrativeId })
        let event = find(events, { id: selectedEventId })
        if (narrative && !event) {
            event = find(narrative.starts_at, { id: selectedEventId })
        }

        if (narrative && event) {
            return <Narrative narrative={narrative} event={event} handleClear={() => {
                this.setState({ selectedNarrativeId: null, selectedEventId: null })
            }} />
        } else {
            return <div />
        }
    }

    isCoordsInBounds() {
        const { coords, watchId } = this.state

        const top = 50.855676
        const bottom = 50.853874
        const left = 0.575935
        const right = 0.577877

        return watchId && ((coords.lat > top || coords.lat < bottom) || (coords.lng > right || coords.lng < left))
    }

    render() {
        const { error, coords, selectedNarrativeId } = this.state

        if (error) {
            return <Alert>{error}</Alert>
        }

        const coordsInBounds = this.isCoordsInBounds()
        const centerAt = coordsInBounds ? coords : this.defaultCoords()

        return (
            <div>
                <GoogleMap
                    defaultZoom={18}
                    center={centerAt}
                    options={{
                        disableDefaultUI: true,
                        fullscreenControl: true,
                        zoomControl: true,
                        styles: MAP_STYLE
                    }}
                >
                    {selectedNarrativeId ? this.makeEventMarkers() : this.makeNarrativeMarkers()}
                    {coordsInBounds && this.makeCircle()}
                </GoogleMap>
                {this.renderNarrative()}
            </div>
        )
    }
}

const Map = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=drawing`,
        loadingElement: <Loading />,
        containerElement: <div className='mt-3' style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `350px` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <LocationWatcher />
))

export default Map;
