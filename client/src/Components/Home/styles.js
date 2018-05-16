import styled from 'styled-components';
import { colors } from '../../project/stylesheet';

export const HomeWrapper = styled.section`
	height: 100%;
	overflow-x: hidden;
`
export const AsideIntroBlock = styled.div`
	height: 100vh;
	width: 20%
	min-width: 350px;
	background: ${colors.grey};
	position: absolute;
	top: 0;
	transition: .3s ease ;
	${props => props.isBlockActive ? 'transform: translateX(-100%); opacity: 0' : 'opacity: 1'}

`
export const H2 = styled.h2`
	margin-bottom: 0.5rem;
`
export const Div = styled.div`
	padding-top: 1rem;
	margin-left: 23.5rem;
	border-bottom: 1px solid black;
	width: 55%;
`
