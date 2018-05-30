import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  height: 40px;
  padding: 1rem 1.5rem 1rem 1.5rem;
  background: ${props => props.color};
  margin-left: 2rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color:${props => props.name === 'Nyheter' || props.name === 'Driftinfo' ? 'black' : 'white'}
`

const SortButton = (props) => (
  <Button name={props.name} onClick={props.sortFeed} color={props.color} className="sort__button" style={{
      fontFamily: 'OpensansBold', fontWeight: 'normal',

    }}> {props.name}</Button>
)

export default SortButton;
