import styled from 'styled-components';
import {colors} from '../../project/stylesheet';
import {Link} from 'react-router-dom';

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  position: absolute;
`

export const IssueWrap = styled.section`
  width: 100vw;
  height: 101%;
  position: relative;
  display: flex;
`

export const MapnavButton = styled.div`
  cursor: pointer;
  width: 175px;
  height: 45px;
  background: ${props => props.bg};
  position: relative;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 150ms ease 150ms;
  color: ${props => props.isClicked === props.type ? 'white' : colors.red};
	z-index: 100;
  margin-right: .5rem;
  &:before {
    content: '';
    width: 100%;
    z-index: -1;
    background: ${props => colors.lightgrey};
    position: absolute;
    border-radius: 0px 0px 15px 15px;
    bottom: 0;
    height: ${props => props.isClicked === props.type ? '0%' : '100%'};
    transition: height 150ms ease 150ms;
  }



`
