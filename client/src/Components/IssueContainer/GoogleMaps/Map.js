/* global google */
import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker, OverlayView } from "react-google-maps";
import { InfoBoxInner } from './Infobox';
import logotype from '../../../project/assets/custompointblue.svg';

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

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
    props.isMarkerShown &&
    <OverlayView
      position={{ lat: 59.34715288600296, lng: 18.02260647406615 }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
    >
    <Marker className="custom__marker"
        position={{ lat: 59.34715288600296, lng: 18.02260647406615 }}
        icon={logotype}
        optimized={false}
        animation={google.maps.Animation.DROP}
      >
        <InfoBox
          onCloseClick={props.onToggleOpen}
          options={{ closeBoxURL: ``, enableEventPropagation: true, alignBottom: true, pixelOffset: new google.maps.Size(-5, -25), }}
        >
          <InfoBoxInner load={props.load} title={'Fel på toaletten'} area={'Data & Informationsteknik'} adress={'Chalmers Tvärg. 6'} />
        </InfoBox>
      </Marker>

    </OverlayView>
  }





  </GoogleMap>
)
))




export default MyMapComponent
