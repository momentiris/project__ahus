import React, { Component } from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../project/assets/search.svg';

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
  min-width: 200px;
  height: 250px;
  margin-right: 2rem;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`
const SwitchSpan = styled.span`
  cursor: pointer;
  font-size: 20px;
  display: inline-block;
  font-family: 'Chronicle';
  margin-bottom: .5rem;
  transition: .2s ease;
`

class SortIssuesComponent extends Component {
  constructor(props) {
    super();

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
  render() {
    return (
      <AsideSort>
        <div>
        <span style={{fontSize: '20px', display: 'block',fontFamily: 'ChronicleLight', marginBottom: '.5rem'}}>Visar anmälningar för </span>
        <span style={{cursor: 'pointer',fontSize: '20px', display: 'block',fontFamily: 'Chronicle'}}>Data & Informationsteknik → </span>
        </div>
        <div style={{position: 'relative'}}>

        <SwitchSpan
          type="new"
          onClick={() => {this.toggleSortButtons('new'), this.state.sortIssues('new') }}
          isActive={this.state.sortActive === 'new'}
          style={{cursor: 'pointer',fontSize: '20px', display: 'inline-block',fontFamily: 'Chronicle', marginBottom: '.5rem'}}>
          <span style={{ fontSize: '20px', display: 'inline',fontFamily: 'ChronicleLight'}}>från </span> {this.state.sortActive === 'new' ? 'Nyast' : 'Äldst'} →
        </SwitchSpan>

        <SwitchSpan
          type="old"
          isActive={this.state.sortActive === 'old'}
          onClick={() => {this.toggleSortButtons('old'), this.state.sortIssues('old') }}
          style={{cursor: 'pointer',fontSize: '20px', display: 'block',fontFamily: 'Chronicle'}}>
          <span style={{fontSize: '20px', display: 'inline',fontFamily: 'ChronicleLight'}}>till </span> {this.state.sortActive === 'old' ? 'Nyast' : 'Äldst'} →
        </SwitchSpan>

      </div>
        <div style={{backgroundImage: `url(${SearchIcon})`, backgroundRepeat: 'no-repeat', backgroundSize: '20px', backgroundPosition: 'left center'}}>
          <InputField value={this.state.searchInputValue} onChange={this.state.filterIssuesById} type="text" placeholder={'Sök ordernummer'}>

          </InputField>
        </div>

      </AsideSort>
    );
  }

}

export default SortIssuesComponent;
