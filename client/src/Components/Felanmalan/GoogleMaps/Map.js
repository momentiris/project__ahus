import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap isMarkerShown
    defaultZoom={16}
    defaultCenter={{ lat: 59.34814839999999, lng: 18.02365789999999 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 59.34814839999999, lng: 18.02365789999999 }}/>}



  </GoogleMap>
))



export default MyMapComponent
