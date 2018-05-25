import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../../../project/stylesheet';


const Pointy = styled.div`
	width: 0;
	height: 0;
	border-left: 20px solid white;
	border-right: 20px solid transparent;
	border-bottom: 20px solid transparent;
	position: relative;
	left: 1rem;

`
const CustomInfoBox = styled.div`
	min-width: 150px;
	display: flex;
	flex-flow: column nowrap;
	background: white;
	padding: 1rem;
	border-radius: 10px;
	font-family: 'Chronicle';
	box-shadow: 3px 3px 5px ${colors.lightgrey};
	margin: 0rem .5rem 0rem 0;

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
