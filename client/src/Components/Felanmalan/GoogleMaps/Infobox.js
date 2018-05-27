import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../../project/stylesheet';


export const Pointy = styled.div`
	width: 0;
	height: 0;
	border-left: 20px solid ${props => props.bg ? props.bg : 'white'};
	border-right: 20px solid transparent;
	border-bottom: 20px solid transparent;
	position: relative;
	left: 1rem;


`
export const CustomInfoBox = styled.div`

	min-width: ${props => props.width ? props.width : '150px'};
	max-width: 300px;
	display: flex;
	flex-flow: column nowrap;
	padding: 1rem;
	border-radius: 10px;
	font-family: 'Chronicle';
	box-shadow:${props => props.noshadow ? '' : `3px 3px 5px ${colors.lightgrey}`} ;
	margin: 0rem .5rem 0rem 0;
	background: ${props => props.bg ? props.bg : 'white'};


`

export const InfoBoxInner = (props) => (
	<React.Fragment>
		<CustomInfoBox onClick={props.handleClick} load={props.load} className="infobox__custom">
			<span style={{fontFamily: 'Chronicle', fontSize: '16px', marginBottom: '.5rem'}}>{props.title}</span>
			<span style={{fontFamily: 'OpensansReg', fontSize: '12px', marginBottom: '.5rem'}}>{props.area}</span>
			<span style={{fontFamily: 'OpensansBold', fontSize: '12px'}}>{props.adress}</span>
		</CustomInfoBox>
		<Pointy />
	</React.Fragment>
)
