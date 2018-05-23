import styled from 'styled-components';
import { colors } from '../../project/stylesheet';
import asideImg from '../../project/assets/Aside_image.png';

export const HomeWrapper = styled.section`
	height: 100%;
	overflow-x: hidden;

`
export const AsideIntroBlock = styled.section`
	height: 100vh;
	width: 20%
	min-width: 350px;
	background: center / cover no-repeat url(${asideImg});
	position: absolute;
	top: 0;
	transition: .3s ease;
	${props => props.isBlockActive ? 'transform: translateX(-100%); opacity: 0' : 'opacity: 1'}
	display: flex;
	align-items: flex-end;
	align-items: center;
	justify-content: flex-end;
	flex-flow: column nowrap;
	& > h3 {
		font-weight: 600;
		letter-spacing: 1.5px;
		margin-bottom: 15rem;
		margin-right: 4.5rem;
	}
`

export const Logotype = styled.img`
	${props => props.isBlockActive ? 'width: 75px; height: auto; top: .85rem;' : 'width: 150px; height:auto; top: 4rem'}
  position: absolute;
  left: 3rem;
  z-index: 3;
	transition: .4s ease;
`
export const ReportButton = styled.div`
	margin: 0;
	display: flex;
	align-items: center;
	padding: 0rem 2rem 0rem 2rem;
	height: 45px;
	background: ${props => props.color}
	border-radius: 20px;
	border: none;
	font-family: 'OpensansBold';
	font-size: 16px;
	color: white;
	margin-bottom: 3rem;
	cursor: pointer;
`

export const ContactBox = styled.section`
	background: ${props => props.color};
	width: 100%;
	padding: 1rem 1rem 1.5rem 1rem;
	border-radius: 15px 15px 0px 0px;

	& > p {
		margin: .25rem;
	}
	& > h5 {
		margin-bottom: .5rem;
		margin-top: 1rem;

	}
`
