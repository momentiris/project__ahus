import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { breakpoints } from '../../../project/styled/helpers'

export const Header = styled.header`

`;

export const Ul = styled.ul`
  position: relative;
  padding: 0;
  left: 10%;
  margin: 0;
  display: flex;
  & > li:nth-child(2) {
    transform: translateX(-2px)
  }
  & > li:nth-child(1) {

  }
`
export const Li = styled.li`
  cursor: pointer;
  list-style: none;
  width: 200px;
  height: 40px;
  background: ${props => props.color}
  border-radius: 0px 0px 37px 37px / 0px 0px 73px 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  &:focus {
    z-index: 1
  }
`;

export const SLink = styled(Link)`

  text-decoration: none;
    &:hover {
      color: white;
    }
`;

export const Nav = styled.nav`
  position: relative;

`

export const Div = styled.div`
  position: relative;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: center;
  background: ${props => props.color}

  border-bottom-left-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;

`
