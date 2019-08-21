import React from 'react'
import { geolocated } from 'react-geolocated';
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
     return (<div>Your browser does not support Geolocation</div>)
  }

  if (!props.isGeolocationEnabled) {
    return (<div>Geolocation is not enabled</div>)
  }

  if (!props.coords) {
    return (<div>Getting the location data&hellip;</div>)
  }

  return <Map userCoords={{ lat: props.coords.latitude, lng: props.coords.longitude }} />
})

export default GeoLocated;
