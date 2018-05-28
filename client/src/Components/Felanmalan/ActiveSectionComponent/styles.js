import styled, {keyframes} from 'styled-components';
import { colors } from '../../../project/stylesheet';
import React, { Component } from 'react';


const StyledExpandIssueContainer = styled.div`
  width: 100%;
  transition: height 200ms ease;
  overflow: hidden;
  height: ${props => props.isActive ? '425px' : 0};
`

export const ExpandIssueContainer = (props) => (

  <StyledExpandIssueContainer isActive={props.isActive}>
    <section>
      <p style={{paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Byggnad: </span>{props.building}</p>
      <p style={{paddingLeft: '1rem', maxWidth: '70%'}}><span style={{fontFamily: 'OpensansBold'}}>Titel: </span>{props.title}</p>
      <p style={{paddingLeft: '1rem', maxWidth: '70%'}}><span style={{fontFamily: 'OpensansBold'}}>Beskrivning: </span>{props.text}</p>
      <p style={{paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Ordernummer: </span>{props.orderId}</p>
      <p style={{borderBottom: '.1px solid black', paddingBottom: '1rem',paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Anmält: </span> {new Date(props.added).toLocaleDateString()} <span style={{fontFamily: 'OpensansBold'}}>av</span> {props.sender.name}</p>
      {
        props.state === 'active' && (
          <React.Fragment>
            <p style={{paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Påbörjad av: </span>{new Date(props.added).toLocaleDateString()}<span style={{fontFamily: 'OpensansBold'}}> av</span> Karl Blom</p>
            <p style={{borderBottom: '1px solid black', paddingBottom: '1rem',paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Svar: </span>Hej! Vi löser detta, inga problem. Hej svejs! Fridens, Kalle</p>
          </React.Fragment>

        )
      }
      {
        props.state === 'finished' && (
          <React.Fragment>
            <p style={{paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Påbörjad av: </span>{new Date(props.added).toLocaleDateString()}<span style={{fontFamily: 'OpensansBold'}}> av</span> Karl Blom</p>
            <p style={{borderBottom: '1px solid black', paddingBottom: '1rem',paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Svar: </span>Hej! Vi löser detta, inga problem. Hej svejs! Fridens, Kalle</p>
            <p style={{paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Avslutad av: </span>{new Date().toLocaleDateString()}<span style={{fontFamily: 'OpensansBold'}}> av</span> Karl Blom</p>
            <p style={{borderBottom: '1px solid black', paddingBottom: '1rem',paddingLeft: '1rem'}}><span style={{fontFamily: 'OpensansBold'}}>Svar: </span>Hej! Då var det fixat! Hej svejs! Fridens, Kalle</p>
          </React.Fragment>

        )
      }

    </section>
  </StyledExpandIssueContainer>
)

export const SuperSpan = styled.span`
	width: ${props => props.width};
`
export const Wrapper = styled.section`
  width: 100%;
  min-width: 500px;
  padding: 6rem 5rem 5rem 5rem;
  display: flex;
  flex-flow: row nowrap;
  text-align: left;
  overflow: scroll;
`
export const IssueListWrap = styled.section`
  width: 65%;
  padding: 1rem;
  min-width: 700px;
`
export const IssueUl = styled.ul`
  padding: 0;
  width: 100%;
  border-top: 1px solid black;
  padding-top: 1rem;
  overflow-y: scroll;
`

export const IssueLi = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  list-style-type: none;
  width: 100%;
  padding: 10px 5px 10px 5px;
  background: ${props => props.bg};
  cursor: pointer;
  &:before {
    transition: .2s ease
    content: '→';
    display: block;
    ${props => props.isActive ? 'transform: rotate(90deg)' : ''};
    color: ${props => props.isActive ? 'green' : 'black'};
  }
`
