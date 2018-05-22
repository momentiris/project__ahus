import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

`

export const IssueWrap = styled.section`
  width: 100vw;
  height: 101%;
  position: relative;
  display: flex;

`

export const MapnavButton = styled.div`
  width: 175px;
  height: 60px;
  background: ${props => props.color};

  position: relative;
  z-index: 10;
  border-radius: 0px 0px 15px 15px;
  transform: translateY(${props => props.isActive ? '0' : '-100%'});
  transition: transform .2s ease-in-out .3s;

`
