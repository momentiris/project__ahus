import React from 'react';
import MapComponent from './GoogleMaps/Map';
import AsideInfoBox from './GoogleMaps/AsideInfoBox';
import { Section, IssueWrap, MapnavButton} from './styles.js'
import {colors} from '../../project/stylesheet';
import ActiveSectionComponent from './ActiveSectionComponent/ActiveSectionComponent';
import ReportIssueButton from '../Buttons/ReportIssueButton';
import bytCampusPurple from '../../project/assets/Campuslogo_blue.svg';
import {SwitchCampusIcon, SwitchCampusInner} from '../Home/styles.js';

class IssueContainer extends React.Component {
	constructor(props) {
		super();

		this.state = {
			load: false,
			view: '',
			...props,
			asideActive: true,
			currentIssue: [],
			btnState: 'map'
		}
	}

	componentDidMount() {
		setTimeout(() => this.setState({
			view: 'map',
			loaded: true,
		}), 500)
	}

	toggleAsideInfoBox = async (issue) => {
		await this.setState({
			asideActive: true,
			currentIssue: {...issue,...issue.sender },
		})

	}
	toggleButtons = async arg => {
		await this.setState({
			btnState: arg,
			view: arg
		})
		console.log(this.state);
	}

	render() {
		return (
			<IssueWrap>
				<MapnavButton bg={colors.red} switchColor={colors.lightgrey} color={'white'} isClicked={this.state.btnState} type="map" isActive={this.state.loaded} onClick={() => this.toggleButtons('map')}><h5>Kartvy</h5></MapnavButton>
				<MapnavButton bg={colors.red} switchColor={colors.red} color={colors.red} isClicked={this.state.btnState} type="active" isActive={this.state.loaded} onClick={() => this.toggleButtons('active')}><h5>Pågående</h5></MapnavButton>
				<MapnavButton bg={colors.red} switchColor={colors.red} color={colors.red} isClicked={this.state.btnState} type="finished" isActive={this.state.loaded} onClick={() => {this.toggleButtons('finished')}}><h5>Avslutade</h5></MapnavButton>
				<Section>

					{
						this.state.view === 'map' &&
						<React.Fragment>
						<AsideInfoBox currentIssue={this.state.currentIssue} isActive={this.state.asideActive}></AsideInfoBox>
						<div style={{position: 'absolute', bottom: '15%', zIndex: '100', left: 'calc(2% + 20px)'}}>
						<ReportIssueButton path="/ny-felanmalan" text="Rapportera ett fel"></ReportIssueButton>
						</div>
						<MapComponent
							issues={this.state.issues}
							load={this.state.loaded}
							toggleAsideInfoBox={this.toggleAsideInfoBox}
	 					  isMarkerShown
	 					  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBb30G0GTm-T_S-l48ZJpaXxwKs9tvIZO4"
	 					  loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
	 					  containerElement={<div style={{ width: `100%`, height: `100%` }} />}
	 					  mapElement={<div style={{ height: `100%` }} />}
	 					/>
					<SwitchCampusIcon color={colors.logoblue} >
	            <div>
	            <SwitchCampusInner style={{backgroundImage: `url('${bytCampusPurple}')`}}></SwitchCampusInner></div>
	            Byt campus
	          </SwitchCampusIcon>
					</React.Fragment>
					}

					{
						this.state.view === 'active' &&
						<ActiveSectionComponent state={this.state.view} issues={this.state.issues}>

						</ActiveSectionComponent>
					}

					{
						(this.state.view === 'finished' && this.state.issues) &&
						<ActiveSectionComponent state={this.state.view} issues={this.state.finishedIssues} >
						</ActiveSectionComponent>
					}


			</Section>
		</IssueWrap>
		);
	}

}

export default IssueContainer;
