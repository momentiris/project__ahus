/* global google */
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, OverlayView } from "react-google-maps";
import { InfoBoxInner } from './Infobox';
import logotype from '../../../project/assets/custompointred.svg';
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

class MyMapComponent extends React.Component {
  constructor(props) {
    super();

    this.state = {
      ...props
    }
  }


  render() {

    return (
      <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 57.6888569, lng: 11.976556099999992 }}
      >

      {
        this.state.issues && this.state.issues.map((issue, i) => (

          <Marker key={i} className="custom__marker"
              position={{ lat: issue.lat, lng: issue.lng}}
              icon={logotype}
              optimized={false}
              animation={google.maps.Animation.BOUNCE}
            >
              <InfoBox
                options={{ closeBoxURL: ``, enableEventPropagation: true, alignBottom: true, pixelOffset: new google.maps.Size(-5, -25), }}
              >
                <InfoBoxInner handleClick={() => this.state.toggleAsideInfoBox(issue)} title={issue.title} area={issue.building} adress={issue.address} />
              </InfoBox>
            </Marker>

        ))

      }
      </GoogleMap>
    );
  }

}

export default withScriptjs(withGoogleMap(MyMapComponent));
