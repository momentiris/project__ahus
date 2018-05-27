import React, { Component } from 'react';
import { Wrapper, IssueUl, IssueLi, AsideSort, IssueListWrap, SuperSpan, ExpandIssueContainer } from './styles';
import SortIssuesComponent from '../SortIssuesComponent/SortIssuesComponent';

class ActiveSectionComponent extends Component {
	constructor(props) {
		super();

		 	this.state = {
			 issues: [...props.issues],
			 allIssues: [...props.issues],
			 finishedIssues: props.finishedIssues && [...props.finishedIssues]
		 	}
			console.log(this.state);
	 	}

	toggleExpandIssue = async i => {
		 await this.setState({
			 issueActive: this.state.issueActive === i ? '' : i,
		 })
		 console.log(this.state);
	}


	sortIssues = async arg => {
		const sorted = await this.state.issues.sort((a, b) => {
	    	a = new Date(a.added);
	    	b = new Date(b.added);
	    	return arg === 'new' ?
				(a > b ? -1 : a < b ? 1 : 0) :
				(a < b ? -1 : a > b ? 1 : 0);
		});

		await this.setState({
			issues: sorted,
		});
	}

	filterIssuesById = async ({target}) => {
		const filtered = await this.state.allIssues.filter(issue =>
			issue.orderId.toString()
				.includes(target.value) && issue);

		await this.setState({
			searchInputValue: target.value,
			issues: [...filtered],
		});

	}

	render() {
		return (
			<Wrapper>
				<SortIssuesComponent searchInputValue={this.state.searchInputValue} sortIssues={this.sortIssues} filterIssuesById={this.filterIssuesById}>

				</SortIssuesComponent>
				<IssueListWrap>
					<div style={{marginBottom: '2rem'}}>
						<h2 style={{fontFamily: 'Chronicle', margin: '0px'}}>Pågående felanmälningar</h2>
						<p>Här finns all felanmälningar som har <br/>blivit besvarade och åtgärdade på campus.</p>
					</div>
				<div style={{width: '100%', display: 'flex', padding: '0rem 22px 0rem 22px'}}>
					<SuperSpan width={'41%'} style={{margin: 0, paddingLeft: '10px'}}><h5 style={{margin: 0}}>Beskrivning</h5></SuperSpan>
					<SuperSpan width={'38%'} style={{margin: 0, paddingLeft: '10px'}}><h5 style={{margin: 0}}>Byggnad</h5></SuperSpan>
					<SuperSpan width={'19%'} style={{paddingLeft: '10px'}}><h5 style={{margin: 0}}>Ordernummer</h5></SuperSpan>
				</div>
				<IssueUl>
					{
						this.state.issues && this.state.issues.map((issue, i) => (
							<div key={i} onClick={ () => this.toggleExpandIssue(i)}>
							<IssueLi isActive={this.state.issueActive === i}bg={i % 2 === 0 ? 'white' : 'lightgrey'}>
								 <SuperSpan width={'40%'} style={{fontFamily: 'OpensansReg', paddingLeft: '10px'}}>{issue.text.substr(0, 30)}...</SuperSpan>
								 <SuperSpan width={'37%'} style={{fontFamily: 'OpensansReg', paddingLeft: '10px'}}>{issue.building}</SuperSpan>
								 <SuperSpan  width={'23%'} style={{fontFamily: 'OpensansReg', paddingLeft: '10px'}}>{issue.orderId}</SuperSpan>
						</IssueLi>
						<ExpandIssueContainer sortIssues={this.sortIssues} isActive={this.state.issueActive === i} {...issue}></ExpandIssueContainer>
						</div>

					))
					}
				</IssueUl>
				</IssueListWrap>
			</Wrapper>
		);
	}

}

export default ActiveSectionComponent;
