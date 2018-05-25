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

		}
		console.log(this.state);
	}

	getAllIssues = async () => {
		const issues = await RequestService.getRequestByType(`${this.props.serverEndpoint}/issues/Chalmers/Johanneberg`);
		await this.setState({
			issues: [...issues],
			allissues: [...issues],
			hasIssues: issues.length > 0 && true,
		})
	}

	 componentWillMount() {
		this.getAllIssues();
		this.state.toggleIsScrolled(true);
	}

	render() {
		const { hasIssues } = this.state.hasIssues;
		return (
			<React.Fragment>
			{
				this.state.hasIssues ?
					<IssueContainer location={this.state.location} issues={this.state.issues}></IssueContainer> :
						<div>loading...</div>
			}
			</React.Fragment>
		)

	}

}

export default Felanmalan;
