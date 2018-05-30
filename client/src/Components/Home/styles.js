import styled from 'styled-components';
import { colors } from '../../project/stylesheet';
import asideImg from '../../project/assets/Aside_image.png';

export const HomeWrapper = styled.section`
	height: 100%;
	overflow-x: hidden;

`

export const SwitchCampusIcon = styled.div`
width: 100px;
height: 110px;
position: absolute;
z-index: 100;
bottom: ${props => props.bottom ? props.bottom : '4.5%'};
right: ${props => props.right ? props.right : '5%'};
font-family: 'OpensansBold';
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
align-items: center;
color: ${props => props.color ? props.color : 'black'};

`
export const SwitchCampusInner = styled.div`
width: 75px;
height: 75px;
border-radius: 50%;
background-position: center;
background-size: contain;
background-repeat: no-repeat;
box-shadow: 0px 2px 5px 0px grey;
cursor: pointer;
transition: all .1s cubic-bezier(.34,.57,.54,1.18);
&:hover {
  transform: scale(0.95);
	box-shadow: 0px 1px 3px 0px grey;
}

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
	& > h2 {
		font-weight: 600;
		letter-spacing: 1.5px;
		margin-bottom: 13rem;

		font-family: 'Chronicle';
		font-weight: 300;
	}
`

export const Logotype = styled.img`
	${props => props.isBlockActive ? 'width: 75px; height: auto; top: .85rem;' : 'width: 150px; height:auto; top: 4rem'}
  position: absolute;
  left: 3rem;
  z-index: 3;
	transition: .4s ease;
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
