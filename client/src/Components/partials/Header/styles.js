import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { breakpoints } from '../../../project/styled/helpers'

import { colors } from '../../../project/stylesheet.js';


export const Ul = styled.ul`
  margin: 0 4rem 0 0;
  padding: 0;
  display: flex;
  height: 65px;
  align-items: center;
  min-width: 375px;
  justify-content: space-between
  position: relative;
`
export const Li = styled.li`
  list-style: none;

`;

export const SLink = styled(Link)`
  color: white;
	font-family: 'Chronicle';
  letter-spacing: 0.5px;
  text-decoration: none;
`;

export const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  background: ${props => props.color}
  transition: background .4s ease;
`

export const Underscore = styled.span`
  height: 2px;
  width: ${props => props.width};
  transition: .3s ease
  position: absolute;
  bottom: 23.5%;
  transform: translateX(${props => props.navHome ? '0px' : '250px'});

  background: white;
  z-index: 10;
`
