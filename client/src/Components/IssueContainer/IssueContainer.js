import React from 'react';

import MapComponent from './GoogleMaps/Map';

import { Section, IssueWrap, MapnavButton} from './styles.js'

import {colors} from '../../project/stylesheet';


class IssueContainer extends React.Component {
	constructor(props) {
		super();
		this.state = {
			load: false,
			view: '',
		}
	}

	componentDidMount() {
		this.setState({

		})
		setTimeout(() => this.setState({
			view: 'map',
			loaded: true,
		}), 500)
	}

	render() {
		return (
			<IssueWrap>
				<MapnavButton color={colors.red} isActive={this.state.loaded}></MapnavButton>


				<Section>
					{
						this.state.view === 'map' &&
						<MapComponent
	 					  isMarkerShown
	 					  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBb30G0GTm-T_S-l48ZJpaXxwKs9tvIZO4"
	 					  loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
	 					  containerElement={<div style={{ width: `100%`, height: `100%` }} />}
	 					  mapElement={<div style={{ height: `100%` }} />}
	 					/>
					}
			</Section>
		</IssueWrap>
		);
	}

}

export default IssueContainer;
