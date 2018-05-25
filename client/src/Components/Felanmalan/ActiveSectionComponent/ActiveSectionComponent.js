import React, { Component } from 'react';
import { Wrapper, IssueUl, IssueLi, AsideSort, IssueListWrap, SuperSpan } from './styles';

class ActiveSectionComponent extends Component {
	 constructor(props) {
		 super();

		 this.state = {
			 issues: [...props.issues],
		 }

	 }
	render() {
		return (
			<Wrapper>
				<AsideSort>
				</AsideSort>
				<IssueListWrap>
					<div style={{marginBottom: '2rem'}}>
						<h3 style={{fontFamily: 'Chronicle', margin: '0px'}}>Pågående felanmälningar</h3>
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
							<IssueLi key={i}>
								 <SuperSpan width={'40%'} style={{fontFamily: 'OpensansReg', paddingLeft: '10px'}}>{issue.text.substr(0, 30)}...</SuperSpan>
								 <SuperSpan width={'37%'} style={{fontFamily: 'OpensansReg', paddingLeft: '10px'}}>{issue.address}</SuperSpan>
								 <SuperSpan  width={'23%'}style={{fontFamily: 'OpensansReg', paddingLeft: '10px'}}>B00001</SuperSpan>
						</IssueLi>

					))
					}
				</IssueUl>
				</IssueListWrap>
			</Wrapper>
		);
	}

}

export default ActiveSectionComponent;
