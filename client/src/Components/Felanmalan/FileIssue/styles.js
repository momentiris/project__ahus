import styled, {keyframes} from 'styled-components';
import { colors } from '../../../project/stylesheet'
import Arrowsvg from '../../../project/assets/issuearrowbutton.svg';

export const Wrapper = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const Selector = styled.select`
	margin: .5rem 0rem 1rem 0rem;
	background: white;

	font-size: 16px;
	border: 1px solid #ccc;
	height: 34px;
	&:focus {
		outline-color: #6EC81E;
	}
`
export const ArrowButton = styled.button`
	width: 50px;
	height: 50px;
	cursor: pointer;
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
const expandSendButton = keyframes`
  from {
    transform: rotate(0deg);
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-position: center;
  }

  to {
		border-radius: 25px;
		width: 150px;
		background-position: 90%;

  }
`;
export const SendButton = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: absolute;
	cursor: pointer;
	background-color: ${colors.lightgreen};
	background-image: url(${Arrowsvg});
	background-repeat: no-repeat;
	background-position: center;
	${props => props.rotate ? 'transform: rotate(180deg)' : ''};
	animation: ${props => props.ready ? `${expandSendButton} .3s ease forwards` : ''};

	transition: .2s ease;
	&:hover {
		background-color: #49A310;
	}
	&:after {
		content: 'Skicka in';
		transition: .3s ease;
		font-size: 16px;
		font-family: 'OpensansBold';
		opacity: ${props => props.ready ? 1 : 0} ;
		margin-right: 1rem;
		color: white;

	}

`

export const InnerWrap = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: center
`
export const DisplayInputData = styled.article`
	width: 250px;
	height: ${props => props.height ? props.height : '200px'};
	background: ${props => props.bg ? props.bg : ''};
	border-radius: 15px;
	display: flex;
	padding: 1rem;
	align-self: start;
	flex-direction: column;
	margin-right: 2rem;
	margin-bottom: 1rem;
	overflow-y: scroll;
`
export const CustomTextArea = styled.textarea`
	font-size: 16px;
	margin: .5rem 0 .5rem 0;
	border: none;
	border-radius: 10px;
	padding-left: .5rem;


	&::placeholder {
		color: #6EC81E;
		font-size: 14px;
		opacity: .5;
		padding-left: .5rem;
	}
	&:focus {
		outline-color: #6EC81E;
	}
`
export const StyledInputBox = styled.section`

	height: 521px;
	width: 420px;

	margin: 0rem 2rem 0rem 2rem;
	border-radius: 30px;
	background: ${colors.lightgrey};
	display: flex;
	flex-flow: column nowrap;
	padding: 1rem;
	align-self: center;
	overflow-x: scroll;



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
