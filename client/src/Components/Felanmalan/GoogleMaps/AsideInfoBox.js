import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../../project/stylesheet';
import { getTimeString } from '../../../project/helpers';

 const StyledAsideInfoBox = styled.section`
	width: 250px;
	min-height: 300px;
	background: white;
	position: absolute;
	z-index: 100;
	border-radius: 15px;
  padding: 1rem;
	left: 2%;
	top: 20%;
	transition: all .3s ease;
	transform: translateX(${props => props.isActive ? '0%' : '-115%'});
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 3px 3px 5px ${colors.lightgrey};

  overflow-y: scroll;
`

const AsideInfoBox = (props) => (

	<StyledAsideInfoBox isActive={props.isActive}>
    <h4 style={{
        margin: '1rem 0rem .5rem 0rem',
        textAlign: 'center',
        fontFamily: 'Chronicle',
      }}>{props.currentIssue.title ? props.currentIssue.title : 'Pågående felanmälningar'}</h4>
    {
      props.currentIssue.text && <p style={{fontSize: '14px'}}>{props.currentIssue.text}</p>
    }
    <div>
      {
        !props.currentIssue.text && <p style={{fontFamily: 'OpensansReg', textAlign: 'center'}}>Här kan du se aktuella felanmälningar för Campus Johanneberg. Klicka på inforutorna på kartan för att här se mer ingående information om varje felanmälan.</p>
      }

    <p style={{fontSize: '12px', margin: '0px'}}><span style={{fontFamily: 'OpensansBold'}}>{props.currentIssue.orderId && 'Ordernummer'}</span> {props.currentIssue.orderId}</p>
    {
      props.currentIssue.text &&   <p style={{fontSize: '12px', marginTop: '0px'}}><span style={{fontFamily: 'OpensansBold'}}>Anmält:</span> {new Date(props.currentIssue.added).toLocaleDateString()}<span style={{fontFamily: 'OpensansBold'}}> av <br /> </span> {props.currentIssue.name}</p>
    }

    </div>

	</StyledAsideInfoBox>
)

export default AsideInfoBox
