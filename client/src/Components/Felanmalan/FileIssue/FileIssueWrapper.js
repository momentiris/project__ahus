import React, { Component } from 'react';
import { Wrapper, StyledInputBox, InputField, InputLabel, InnerWrap, DisplayInputData, ArrowButton, SendButton } from './styles.js';
import { Pointy, CustomInfoBox} from '../GoogleMaps/Infobox';
import {issueBoxData} from './helpers';
import ReportIssueButton from '../../Buttons/ReportIssueButton';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import InputBox from './InputBox';
import { colors } from '../../../project/stylesheet';


import RequestService from '../../../utils/RequestService';

class FileIssueWrapper extends Component {
	constructor(props) {
		super()
		this.state = {
			currentPosition: 0,
			first: true,
			second: false,
			third: false,
			issue: {},
			...props,
		}
	}

	componentWillMount() {
		this.state.context.toggleIsScrolled(true);
	}

	pushToIssue = async (input, index) => {
		let issue = Object.assign({}, this.state.issue);    //creating copy of object
		issue[index] = input;                        //updating value
		await this.setState({issue});

	}

	checkIfFilledInputs = () => {
		if (this.state.currentPosition === 0 && this.state.issue.building) {
			this.setState({
				firstReady: true,
			})
		}
		if (this.state.currentPosition === 1 && !this.state.issue.text ) return;
		if (this.state.currentPosition === 1 && this.state.issue.text.toString().length > 2 ) {
			this.setState({
				secondReady: true,
			})
		} else {
			this.setState({
				secondReady: false,
			})
		}
		if ( this.state.currentPosition === 2 &&( this.state.issue.name && this.state.issue.email && this.state.issue.telephone)) {
			setTimeout(() => this.setState({thirdReady: true}), 500)
		}
	}

	sendIssue = async () => {
		const issue = await this.state.issue;
		const issueSend = {
			title: issue.title,
			text: issue.text,
			university: 'Chalmers',
			campus: 'Johanneberg',
			building: issue.building,
			status: 'unresolved',
			lat: 57.68822059999999,
			lng: 11.978550799999994,
			address: 'Quarl Ankas Väg 3',
			sender: {
				name: issue.name,
				email: issue.email,
				telephone: issue.telephone,
			},
		};

		await delete issue.name;
		await delete issue.email;
		await delete issue.telephone;

		const post = await RequestService.postRequest('http://localhost:1337/issues', issueSend);
		console.log(post);

	}

	getInputValue = async ({target}) => {
		const index = target.name;
		const input = target.value;
		await this.pushToIssue(input, index)
		await this.checkIfFilledInputs();
	}

	changeView = async arg => {
		if (this.state.currentPosition === 0 && !this.state.firstReady) return;
		if (this.state.currentPosition === 1 && !this.state.secondReady) return;

		await this.setState({
			currentPosition: arg === 'forward' ?
				this.state.currentPosition + 1 :
				this.state.currentPosition - 1
		})
	}

	render() {
		return (
			<Wrapper>
				{
					this.state.currentPosition !== 3 && (
				<InnerWrap>
					<div style={{minHeight: '500px', height: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexFlow: 'column', paddingRight: '2rem'}}>
					<DisplayInputData bg="#F2F1EA">
						{
							this.state.issue.building && (
								<React.Fragment>
								<span style={{fontFamily: 'OpensansBold'}}>Byggnad: <br/>
								</span>
								<span style={{fontFamily: 'OpensansReg', marginBottom: '10px'}}>{this.state.issue.building}
								</span>
								</React.Fragment>
							)
						}
						{
							this.state.issue.address && (
								<React.Fragment>
								<span style={{marginBottom: '7px',fontFamily: 'OpensansReg'}}>Adress: <br/>
								</span>
								<span style={{fontFamily: 'OpensansBold'}}>{this.state.issue.address}
								</span>
							</React.Fragment>
							)
						}
						{
							this.state.issue.roomnumber && (
								<React.Fragment>
									<span style={{fontFamily: 'OpensansBold'}}>Rumsnr: <br/>
									</span>
									<span style={{fontFamily: 'OpensansReg'}}>{this.state.issue.roomnumber}
									</span>
								</React.Fragment>
							)
						}

					</DisplayInputData>
					{
						this.state.currentPosition !== 0 && (
							<DisplayInputData bg="#F2F1EA" height={'300px'}>
								{
									this.state.issue.title && (
										<React.Fragment>
										<span style={{display: 'block',fontFamily: 'OpensansBold'}}>Rubrik: <br/>
										</span>
										<span style={{fontFamily: 'OpensansReg', width:'200px', marginBottom: '10px'}}>{this.state.issue.title}
										</span>
										</React.Fragment>
									)
								}
								{
									this.state.issue.text && (
										<React.Fragment>
										<span style={{display: 'block',fontFamily: 'OpensansBold'}}>Beskrivning: <br/>
										</span>
										<span style={{fontFamily: 'OpensansReg', width:'200px'}}>{this.state.issue.text}
										</span>
										</React.Fragment>
									)
								}
							</DisplayInputData>
						)
					}

					<ReportIssueButton margin="0"style={{marginTop:'2rem'}}width="150px" path="/felanmalan/map" text="Avbryt"></ReportIssueButton>
					</div>
					<section style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
				{
					this.state.currentPosition === 0 &&
					<React.Fragment>
						<div style={{width: '50px'}}>

						</div>
					<InputBox pos={this.state.currentPosition} issue={this.state.issue} getInputValue={this.getInputValue} text="Välj vilken byggnad du vill" underline="felanmäla"></InputBox>
					<ArrowButton onClick={() => this.changeView('forward')} ready={this.state.firstReady} />
					</React.Fragment>
				}

				{
					this.state.currentPosition === 1 &&
					<React.Fragment>
						<ArrowButton onClick={() => this.changeView('back')} rotate="true" ready="true"/>
						<InputBox pos={this.state.currentPosition} issue={this.state.issue} getInputValue={this.getInputValue} text="" underline="Beskriv felet"></InputBox>
						<ArrowButton onClick={() => this.changeView('forward')} ready={this.state.secondReady} />
					</React.Fragment>
				}
				{
					this.state.currentPosition === 2 &&
					<React.Fragment>
						<ArrowButton onClick={() => this.changeView('back')} ready="true" rotate="true"/>
					<InputBox pos={this.state.currentPosition} issue={this.state.issue} getInputValue={this.getInputValue} text="" underline="Kontaktuppgifter"></InputBox>
					<div style={{position: 'relative', width: '50px', display: 'flex', height: '100%', alignItems: 'center'}}>
					<SendButton onClick={() => {this.sendIssue(), this.changeView('forward')}} ready={this.state.thirdReady} />
					</div>
					</React.Fragment>
				}


			</section>
				<div style={{padding: '0rem', width: '300px'}}>
					<CustomInfoBox width="300px"style={{fontFamily: 'Opensansreg'}} bg="#F2F1EA" noshadow={true}>
						{issueBoxData[this.state.currentPosition].infobox}
					</CustomInfoBox>
					<Pointy bg="#F2F1EA" />
				</div>
			</InnerWrap>
		)
	}
	{
		this.state.currentPosition === 3 && (
			<InnerWrap>
				<div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', justifyContent: 'center'}}>
				<h1 style={{margin: '.5rem'}}>Tack!</h1>
				<h2 style={{margin: '0 .5rem 1.5rem .5rem'}}>Din anmälan har blivit skickad.</h2>
				<ReportIssueButton bg={colors.lightgreen} path="/felanmalan/map" text="Stäng"></ReportIssueButton>
				</div>
			</InnerWrap>
		)
	}

			</Wrapper>
		);
	}

}



export default FileIssueWrapper;
