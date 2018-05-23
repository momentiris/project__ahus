import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -2

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
  height: 60px;
  background: ${props => props.bg};
  position: relative;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 150ms ease-in-out 1s;
  color: ${props => props.color};


`
