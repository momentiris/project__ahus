import React from 'react';

import MapComponent from './GoogleMaps/Map';

import { Section} from './styles.js'


class IssueContainer extends React.Component {

	render() {
		return (
			<Section>
				<MapComponent
				  isMarkerShown
				  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBb30G0GTm-T_S-l48ZJpaXxwKs9tvIZO4"
				  loadingElement={<div style={{ height: `100%` }} />}
				  containerElement={<div style={{ width: `50%`, height: `400px` }} />}
				  mapElement={<div style={{ height: `100%` }} />}
				/>
		</Section>
		);
	}

}

export default IssueContainer;
