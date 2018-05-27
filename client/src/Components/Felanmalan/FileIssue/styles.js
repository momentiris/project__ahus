import styled from 'styled-components';
import { colors } from '../../../project/stylesheet'
import Arrowsvg from '../../../project/assets/issuearrowbutton.svg';

export const Wrapper = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`


export const ArrowButton = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${colors.lightgreen};
	background-image: url(${Arrowsvg});
	background-repeat: no-repeat;
	background-position: center;
	${props => props.rotate ? 'transform: rotate(180deg)' : ''};
	opacity: ${props => props.ready ? 1 : .5};
	transition: .2s ease;
	&:hover {
		background-color: #49A310;	
	}

`

export const InnerWrap = styled.div`
	width: 100%;
	display: flex;
	justify-content: center
`
export const DisplayInputData = styled.article`
	min-width: 250px;
	height: 200px;
	background: ${props => props.bg ? props.bg : ''};
	border-radius: 15px;

	align-self: start;

`

export const StyledInputBox = styled.section`

	height: 521px;
	width: 420px;
	min-width: 350px;
	margin: 0rem 2rem 0rem 2rem;
	border-radius: 30px;
	background: ${colors.lightgrey};
	display: flex;
	flex-flow: column nowrap;
	padding: 1rem;
	align-self: center;



`

export const InputLabel = styled.label`
	font-family: 'OpensansBold';
`

export const InputField = styled.input`
	padding-left: .5rem;
	font-size: 16px;
	width: ${props => props.width};
	height: 40px;
	border: none;
	border-radius: 5px;
	margin: 10px 0px 1rem 0px;
	&::placeholder {
		color: #6EC81E;
		font-size: 14px;
		opacity: .5;
	}
	&:focus {
		outline-color: #6EC81E;
	}
`
