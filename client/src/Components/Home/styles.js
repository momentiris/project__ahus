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
`

export const Logotype = styled.img`
	${props => props.isBlockActive ? 'width: 75px; height: auto; top: .85rem;' : 'width: 150px; height:auto; top: 4rem'}
  position: absolute;
  left: 3rem;
  z-index: 3;
	transition: .4s ease;
`
