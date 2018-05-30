import React, { Component } from 'react';
import { colors } from '../../project/stylesheet.js'
import { Wrap, Logotype, Button, ListWrap, CitySelectorWrap, CitySpan, ExpandCity, CampusSpan } from './styles.js';
import posed from 'react-pose';
import styled from 'styled-components';
import logo from '../Home/logotype/Obs_Aside.svg';
import {coordinates, campuses} from './fakedata.js';
import { Link } from 'react-router-dom';
import { Loader } from '../Loading/loading';


const cities = ['Alnarp', 'Bohuslän', 'Borås', 'Grythyttan', 'Gävle', 'Göteborg', 'Karlstad', 'Kristianstad', 'Linköping', 'Luleå', 'Lund', 'Malmö', 'Norrköping', 'Skövde', 'Stockholm', 'Umeå', 'Uppsala', 'Örebro'];
const campusess = ['Chalmers - Campus Johanneberg', 'Göteborgs universitet - Campus medicinareberget', 'Göteborgs universitet - Campus Haga Linné', 'Göteborgs universitet - Renströmsparken och Handelshögskolan']

const SLink = styled(Link)`
	text-decoration: none;
	font-size: 2rem;
	color: white;

`

class CampusSelector extends Component {
	constructor(props) {
		super(props);
		this.loadAnim = React.createRef();

		this.state = {
			listview: false,
		}

	}

	toggleListView = (e) => {
		e.preventDefault();
		this.setState({
			listview: true,
		})
	}

	toggleLoader = (e) => {
		e.preventDefault();
		this.setState({
			loader: true,
		})
	}

	expandCampuses = async uni => {

		this.setState({
			active: uni === 'Göteborg' ? true : false
		})
	}

	render() {
		return (
			<Wrap className="lottietest"innerRef={this.loadAnim} color={colors.blue}>
				<Logotype src={logo} />
			{
				!this.state.listview && (
					<React.Fragment>
					<h2 style={{fontSize: '40px', color: 'white', fontWeight: '300', fontFamily: 'ChronicleLight'}}>Välkommen till obs!</h2>
					<div style={{width: '200px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem'}}>
						{
							this.state.loader && (
								<Loader></Loader>

							)
						}
					</div>
					<div style={{width: '40%', display: 'flex', justifyContent: 'space-around'}}>
					<Button to="/campus/listvy" onClick={this.toggleListView}>Fel plats?</Button>
					<Button to="/hem/" onClick={this.toggleLoader}>Hitta min plats</Button>
					</div>
					</React.Fragment>

				)
			}

			{
				this.state.listview && (
					<ListWrap>
						<CitySelectorWrap>
						{
							cities.map((city, i) => <CitySpan to="/hem" onClick={() => this.expandCampuses(city)}key={i}>{city}</CitySpan> )
						}
						</CitySelectorWrap>
						<ExpandCity>

								{
									this.state.active && campusess.map((campus, i) => <CampusSpan to="/hem" key={i} >{campus}</CampusSpan>)
								}

						</ExpandCity>
					</ListWrap>
				)
			}
		</Wrap>

		);
	}

}

export default CampusSelector;
