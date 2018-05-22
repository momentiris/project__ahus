/* global google */
import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const myMarkerSVG = './image.svg';

const markers = {
  1: {
    lat: 59.34814839999999,
    lng: 18.02365789999999
  },
  2: {
    lat: 59.347628767214275,
    lng: 18.023690086508168
  },
  3: {
    lat: 59.34715288600296,
    lng: 18.02260647406615
  },
}

const MyMapComponent = withScriptjs(withGoogleMap((props) => (

  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 59.34814839999999, lng: 18.02365789999999 }}
  >
  {
    props.isMarkerShown && markers && Object.entries(markers).map(([i, inst]) => (
      <Marker animation={google.maps.Animation.BOUNCE} key={i} position={{ lat: inst.lat, lng: inst.lng }} />
    ))
  }

  </GoogleMap>
)
))




export default MyMapComponent
