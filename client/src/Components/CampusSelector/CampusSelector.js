import React, { Component } from 'react';
import { colors } from '../../project/stylesheet.js'
import { Wrap, Logotype } from './styles.js';

import posed from 'react-pose';
import styled from 'styled-components';

import logo from '../Home/logotype/Obs_Aside.svg';
import {coordinates, campuses} from './fakedata.js';

import { Link } from 'react-router-dom'

const SLink = styled(Link)`
	text-decoration: none;
	font-size: 2rem;
	color: white;

`

class CampusSelector extends Component {
	constructor(props) {
		super(props);
		this.geobutton = React.createRef();
		this.state = {
			userCoords: {},
			locations: false,
		}
	}
	async getUserLocation() {
		await navigator.geolocation.getCurrentPosition(async(res, err) => {
			if (err) console.log(err);

		  this.setState({
				userCoords: {
					lat: await res.coords.latitude,
					lng: await res.coords.longitude,
				}
			})
			this.getCampusLocations()
		})
	}
	async getCampusLocations() {

			const oks = Object.entries(campuses).map(([inst, key]) => key)
			console.log(oks);

			const ok = Object.entries(campuses).map(([inst, key]) => key)
			.filter(thing => (thing.lat > this.state.userCoords.lat - .5 &&
				 thing.lat < this.state.userCoords.lat + .5) &&
				  (thing.lng > this.state.userCoords.lng -.5 &&
					 thing.lng < this.state.userCoords.lng + .5));

			await this.setState({
				locations: ok ? {...ok} : false,
			})
			console.log(this.state);
	}

	// componentDidMount() {
		// this.geobutton.current.click();
	// }
	// this.state.locations && Object.entries(this.state.locations).map(([key, location]) => {
	// 	return (
	// 		<Campus pose={'enter'} key={key}>{location.campus}</Campus>
	//
	// 	)
	render() {
		return (
			<Wrap innerRef={this.geobutton} color={colors.blue}>
			<Logotype src={logo} />
			<h1 style={{fontSize: '40px'}}>Välkommen till obs!</h1>
			<h1>logo</h1>
			<SLink to='/hem/?campus=johanneberg'>Chalmers - Campus Johanneberg</SLink>
			</Wrap>
		);
	}

}

export default CampusSelector;
