import React, { Component } from 'react';
import { Wrapper, StyledInputBox, InputField, InputLabel, InnerWrap, DisplayInputData, ArrowButton } from './styles.js';
import { Pointy, CustomInfoBox} from '../GoogleMaps/Infobox';
import {issueBoxData} from './helpers';
import ReportIssueButton from '../../Buttons/ReportIssueButton';

class FileIssueWrapper extends Component {
	constructor(props) {
		super()
		this.state = {
			position: 0,
			issue: {},
			...props,
		}
	}

	componentWillMount() {
		this.state.context.toggleIsScrolled(true);
	}

	pushToIssue = async (input, index) => {
		this.state.issue[index] = input
		console.log(this.state.issue);
	}

	getInputValue = async ({target}) => {
		console.log(target.name);
		const index = target.name;
		const input = target.value;
		await this.pushToIssue(input, index)



	}

	render() {
		return (
			<Wrapper>
				<InnerWrap>
					<div style={{height: '500px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexFlow: 'column'}}>
					<DisplayInputData bg="#F2F1EA" ></DisplayInputData>
					<ReportIssueButton width="150px" path="/felanmalan/map" text="Avbryt"></ReportIssueButton>
					</div>
					<section style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
						<span style={{width: '50px'}}></span>
						{
							this.state.position !== 0 && <ArrowButton rotate={true}/>
						}

				<InputBox issue={this.state.issue} getInputValue={this.getInputValue} text="Välj vilken byggnad du vill" underline="felanmäla">Hej</InputBox>

				<ArrowButton ready={this.state.ready} />
			</section>
				<div style={{padding: '0rem', width: '300px'}}>
					<CustomInfoBox width="300px"style={{fontFamily: 'Opensansreg'}} bg="#F2F1EA" noshadow={true}>
						{issueBoxData[this.state.position].infobox}
					</CustomInfoBox>
					<Pointy bg="#F2F1EA" />
				</div>
			</InnerWrap>
			</Wrapper>
		);
	}

}

const InputBox = (props) => (
	<StyledInputBox>
		<h2 style={{textAlign: 'center '}}>{props.text} <span style={{borderBottom: '2px solid black', padding: '0px 1rem 5px 1rem'}}>{props.underline}</span>
		</h2>
		<InputLabel for="building">Byggnad</InputLabel>
		<select name="building" value={props.issue.building} onChange={props.getInputValue}>
		  <option value="Kårhuset">Kårhuset</option>
		  <option value="Drift & Informationsteknik">Drift & Informationsteknik</option>
	</select>
		<InputLabel for="roomnumber">Rumsnr</InputLabel>
		<InputField onChange={props.getInputValue} type="text" name="roomnumber" width="50%" placeholder="Välj rumsnummer"></InputField>


	</StyledInputBox>
)

export default FileIssueWrapper;
