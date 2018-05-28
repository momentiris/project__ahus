import React from 'react';
import styled from 'styled-components';
import { colors } from '../../project/stylesheet';
import {Link} from 'react-router-dom';

const Button = styled(Link)`
	margin: 0;
	display: flex;
	align-items: center;
	padding: 0rem 2rem 0rem 2rem;
	height: 45px;
	background: ${props => props.bg ? props.bg : colors.red};
	border-radius: 25px;
	border: none;
	font-family: 'OpensansBold';
	font-size: 16px;
	color: white;
	margin-bottom: 3rem;
	cursor: pointer;
	text-decoration: none;
	justify-content: center;
	 ${props => props.width ? `width: ${props.width}; box-shadow: 0px 3px 2px ${colors.lightgrey};` : ''};


`
const ReportIssueButton = ({path, text, width, bg}) => {
	return (
		<Button bg={bg}width={width}to={path}>{text}</Button>
	);
}



export default ReportIssueButton;
