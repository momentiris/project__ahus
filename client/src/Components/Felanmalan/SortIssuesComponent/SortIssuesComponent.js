import React, { Component } from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../project/assets/search.svg';
import ReportIssueButton from '../../Buttons/ReportIssueButton';


const InputField = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  background-image: url('${SearchIcon}'):
  background-size: contain;
  background-position: left;
  height: 25px;
  background:rgba(0,0,0,0);
  padding: 15px 15px 15px 2rem;
  &:focus {
    outline-width: 0;
}
  font-size: 14px;
`
const AsideSort = styled.section`
  width: 250px;

  margin-right: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`
const SwitchSpan = styled.span`

  font-size: 20px;
  display: inline-block;
  font-family: 'Chronicle';
  margin-bottom: .5rem;
  transition: .2s ease;
`

class SortIssuesComponent extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      sortActive: 'new',
      ...props,
    }

  }
  toggleSortButtons = btn => {
    this.setState({
      sortActive: btn,
    })
  }
  test = ({target}) => {
    console.log(target.value);
  }
  render() {
    return (
      <AsideSort>
        <div>
        <span style={{fontSize: '20px', display: 'block',fontFamily: 'ChronicleLight', marginBottom: '.5rem'}}>Visar anmälningar för </span>
        <span style={{cursor: 'pointer',fontSize: '20px', display: 'block',fontFamily: 'Chronicle'}}>
          Alla byggnader →

        </span>
        </div>
        <div style={{position: 'relative'}}>

        <SwitchSpan>
          <span className="first"style={{ fontSize: '20px', display: 'inline',fontFamily: 'Chronicle',}}>från </span>  <input data-nr="1" onChange={this.state.sortIssues} type="date" style={{height: '25px', marginLeft: '10px'}}/> →
        </SwitchSpan>

        <SwitchSpan>
          <span style={{fontSize: '20px', display: 'inline',fontFamily: 'Chronicle'}}>till </span>
            <input data-nr="2" onChange={ this.state.sortIssues} type="date" style={{height: '25px', marginLeft: '19px'}}/> →
        </SwitchSpan>


      </div>
        <div style={{backgroundImage: `url(${SearchIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: '20px', backgroundPosition: 'left center'}}>
          <InputField style={{width: '100%'}}value={this.state.searchInputValue} onChange={this.state.filterIssuesById} type="text" placeholder={'Sök ordernummer'}>

          </InputField>
        </div>
        <div style={{marginTop: '2rem'}}>
        	<ReportIssueButton width="100%"path="/ny-felanmalan" text="Rapportera ett fel" />
          </div>

      </AsideSort>
    );
  }

}

export default SortIssuesComponent;
