import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: ${props => props.color};
`

export const Logotype = styled.img`
  height: 75px;
`

export const Button = styled(Link)`
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0rem 2rem 0rem 2rem;
  height: 45px;
  background: white;
  box-shadow: 0px 3px 3px grey;
  color: #0094BB;
  border-radius: 25px;
  border: none;
  font-family: 'OpensansBold';
  font-size: 16px;
  width: 200px;
  margin-bottom: 3rem;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;

`

export const ListWrap = styled.section`
  width: 70%;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const CitySelectorWrap = styled.section`
  width: 50%;
  height: 330px;
  border-right: 2px solid white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

`
export const CitySpan = styled.p`
  width: ${props => props.width ? props.width : '50%'};
  font-family: 'OpensansReg';
  font-size: 12px;
  color: white;
  height: 20px;
  margin: .5rem;
  cursor: pointer;
  font-weight: light;
  transition: all .1s ease;
  text-decoration: none;
  &:hover {
    font-weight: bolder;
  }
`
export const CampusSpan = styled(Link)`

  font-family: 'OpensansReg';
  font-size: 12px;
  color: white;
  height: 20px;
  margin: .5rem;
  cursor: pointer;
  font-weight: light;
  transition: all .1s ease;
  text-decoration: none;
  &:hover {
    font-weight: bolder;
  }
`
export const ExpandCity = styled.section`
  width: 50%
  height: 330px;
  display: flex;
  flex-flow: column nowrap;
  padding-left: 3rem;
  &>div>p {
    margin-bottom: 1rem;
  }



`
