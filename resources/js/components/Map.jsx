import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps'
import ReactGA from 'react-ga'
import { GOOGLE_MAPS_API_KEY } from '../variables'
import { MAP_STYLE } from '../mapstyle'
import isEmpty from 'lodash/isEmpty'
import find from 'lodash/find'
import filter from 'lodash/filter'
import map from 'lodash/map'
import Error from './Error'
import Loading from './Loading'
import Narrative from './Narrative'

class LocationWatcher extends Component {
  constructor(props) {
    super(props)
    const { narrative_id, event_id } = this.props
    this.state = {
      watchId: null,
      coords: this.centerCoords(),
      error: null,
      narratives: [],
      narrativeId: parseInt(narrative_id, 10) || null,
      events: [],
      eventId: parseInt(event_id, 10) || null
    }
  }

  sendEvent(action, label) {
    ReactGA.event({
      category: 'map',
      action,
      label
    });
  };

  centerCoords() {
    return {
      lat: 50.855100,
      lng: 0.576700
    }
  }

  geolocationProvider() {
    return typeof navigator !== "undefined" && navigator.geolocation
  }

  canGeolocate() {
    const provider = this.geolocationProvider()
    const supported = provider && provider.watchPosition && provider.clearWatch
    return supported
  }

  makeNarrativeMarkers() {
    const { narratives } = this.state
    let markers = []
    narratives.forEach(narrative => {
      let mappableEvents = filter(narrative.starts_at, this.eventIsMappable)
      markers = markers.concat(map(mappableEvents, (event) => this.makeMarker('nrt', event, () => {
        this.sendEvent('narrative', narrative.name)
        this.sendEvent('event', event.name)
        window.location.href = `/narrative/${narrative.id}/event/${event.id}`
      })))
    })
    return markers
  }

  makeEventMarkers() {
    const { events, narrativeId } = this.state
    let mappableEvents = filter(events, this.eventIsMappable)
    const markers = map(mappableEvents, (event) => this.makeMarker('evt', event, () => {
      this.sendEvent('event', event.name)
      window.location.href = `/narrative/${narrativeId}/event/${event.id}`
    }))
    return markers
  }

  eventIsMappable(event) {
    return event.coords.lat && event.coords.lng
  }

  makeMarker(keyPrefix, event, onClick) {
    const icon = {
      url: event.icon_url,
      anchor: new google.maps.Point(16, 16),
      scaledSize: new google.maps.Size(32, 32),
      size: new google.maps.Size(32, 32),
      labelOrigin: new google.maps.Point(16, 40)
    }

    const label = { text: event.name }

    const key = `${keyPrefix}-${event.id}`

    return <Marker
      key={key}
      position={event.coords}
      title={event.name}
      label={label}
      icon={icon}
      onClick={onClick}
    />
  }

  makeLocationMarker() {
    const { coords } = this.state
    const outerOptions = {
      center: coords,
      clickable: false,
      fillColor: '#072247',
      fillOpacity: 0.1,
      strokeColor: '#FFF',
      strokeOpacity: 0.3,
      strokeWeight: 1,
      radius: 20
    }
    const innerOptions = {
      center: coords,
      clickable: false,
      fillColor: '#072247',
      fillOpacity: 0.2,
      strokeColor: '#FFF',
      strokeOpacity: 1,
      strokeWeight: 0,
      radius: 2
    }
    return [
      <Circle key='outerLocationMarker' options={outerOptions} />,
      <Circle key='innerLocationMarker' options={innerOptions} />
    ]
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
    this.stopWatchingPosition()
  }

  handlePositionChange(position) {
    this.setState({ coords: { lat: position.coords.latitude, lng: position.coords.longitude }, error: null })
  }

  stopWatchingPosition() {
    const { watchId } = this.state
    if (this.canGeolocate()) {
      const provider = this.geolocationProvider()
      provider.clearWatch(watchId)
      this.setState({ watchId: null })
    }
  }

  handlePositionError(error) {
    if (error.message) {
      console.error(error.message)
    }

    const code = error.code
    let msg = ''
    switch (code) {
      case 1: msg = 'insufficient permissions'; break
      case 2: msg = 'a device error'; break
      case 3: msg = 'a timeout occurred'; break
      default: msg = 'an unknown error occurred'; break
    }

    this.setState({ error: `Acquisition of position failed because of ${msg}` })
    this.stopWatchingPosition()
  }

  fetch() {
    const { narrativeId } = this.state

    axios.get('/api/narratives').then(res => {
      this.setState({ narratives: res.data.data });
    })

    if (narrativeId) {
      axios.get(`/api/narratives/${narrativeId}/events`).then(res => {
        this.setState({ events: res.data.data });
      })
    }
  }

  renderNarrative() {
    const { narratives, narrativeId, events, eventId } = this.state
    const narrative = find(narratives, { id: narrativeId })
    let event = find(events, { id: eventId })
    if (narrative && !event) {
      event = find(narrative.starts_at, { id: eventId })
    }

    if (narrative && event) {
      return <Narrative
        narrative={narrative}
        event={event}
        handleBack={() => {
          window.location.href = '/'
        }}
        handleChangeEvent={(nextEventId) => {
          const nextEvent = find(events, { id: nextEventId })
          if (nextEvent) {
            this.sendEvent('event', nextEvent.name)
            window.location.href = `/narrative/${narrativeId}/event/${nextEvent.id}`
          }
        }}
      />
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

    return watchId && coords.lat <= top && coords.lat >= bottom && coords.lng <= right && coords.lng >= left
  }

  render() {
    const { error, watchId, narrativeId } = this.state
    const centerAt = this.centerCoords()

    return (
      <div>
        {error && <Error>{error}</Error>}
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
          {narrativeId ? this.makeEventMarkers() : this.makeNarrativeMarkers()}
          {!error && watchId && this.makeLocationMarker()}
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
  <LocationWatcher {...props} />
))

export default Map;
