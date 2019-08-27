import React from 'react'
import { geolocated } from 'react-geolocated'
import Alert from './Alert'
import Loading from './Loading'
import Map from './Map'

const GeoLocated = geolocated({
    positionOptions: {
        enableHighAccuracy: false,
        // maximumAge: 0,
        // timeout: Infinity
    },
    watchPosition: true,
    userDecisionTimeout: 5000, // Can be null
    // suppressLocationOnMount: false,
    // geolocationProvider: navigator.geolocation,
    // isOptimisticGeolocationEnabled: true
})((props) => {
    if (!props.isGeolocationAvailable) {
        return <Alert>Your browser does not support Geolocation</Alert>
    }

    if (!props.isGeolocationEnabled) {
        return <Alert>Geolocation is not enabled</Alert>
    }

    if (!props.coords) {
        return <Loading />
    }

    return <Map userCoords={{ lat: props.coords.latitude, lng: props.coords.longitude }} />
})

export default GeoLocated;
