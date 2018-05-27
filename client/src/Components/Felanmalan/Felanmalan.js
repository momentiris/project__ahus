import React, { Component } from 'react';
import IssueContainer from './IssueContainer';
import RequestService from '../../utils/RequestService';

import { HomeContext } from '../../Contexts/HomeContext';

class Felanmalan extends Component {
	constructor(props) {
		super();
		this.state = {
			hasIssues: false,
			issues: [],
			location: props.location,
			...props.context,
			finishedIssues: [],
		}
	}

	getActiveIssues = async () => {
		const issues = await RequestService.getRequestByType(`${this.props.serverEndpoint}/issues/Chalmers/Johanneberg`);
		await this.setState({
			issues: [...issues],
			allissues: [...issues],
			hasIssues: issues.length > 0,
		})

	}

	getFinishedIssues = async () => {
		const issues = await RequestService.getRequestFinished(`${this.props.serverEndpoint}/issues`);
		await this.setState({
			allFinishedIssues: [...issues],
			finishedIssues: [...issues],
		})
		console.log(this.state);
	}

	 async componentWillMount() {
		 await this.getFinishedIssues();
		await this.getActiveIssues();
		this.state.toggleIsScrolled(true);
	}


	render() {
		const { hasIssues } = this.state.hasIssues;
		return (
			<React.Fragment>
			{
				this.state.hasIssues ?
					<IssueContainer getFinishedIssues={this.getFinishedIssues} location={this.state.location} issues={this.state.issues} finishedIssues={this.state.finishedIssues}></IssueContainer> :
						<div>loading...</div>
			}
			</React.Fragment>
		)

	}

}

export default Felanmalan;
