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
  min-width: 350px;
  justify-content: space-between
  position: relative;
`
export const Li = styled.li`
  list-style: none;
  font-size: 22px;
`;

export const SLink = styled(Link)`
  color: white;
  text-decoration: none;
    &:hover {
      color: white;
    }
`;

export const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  background: ${props => props.color}
  transition: background .4s ease;
`

export const Underscore = styled.span`
  height: 1px;
  width: ${props => props.width};
  transition:  .4s ease 0.2s
  position: absolute;
  bottom: 33.5%;
  right: ${props => props.navHome ? '49.5%' : ' 0%'}

  background: white;
  z-index: 10;

`
