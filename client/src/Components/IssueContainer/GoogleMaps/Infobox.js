import React, { Component } from 'react';
import styled from 'styled-components';
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
	padding 1rem;
	border-radius: 10px;
	font-family: 'Chronicle';

`

export const InfoBoxInner = (props) => (
	<React.Fragment>
		<CustomInfoBox load={props.load} className="infobox__custom">
			<span style={{fontFamily: 'Chronicle', fontSize: '16px', marginBottom: '.5rem'}}>{props.title}</span>
			<span style={{fontFamily: 'OpensansReg', fontSize: '12px', marginBottom: '.5rem'}}>{props.area}</span>
			<span style={{fontFamily: 'OpensansBold', fontSize: '12px'}}>{props.adress}</span>
		</CustomInfoBox>
		<Pointy />
	</React.Fragment>
)
