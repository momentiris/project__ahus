import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  height: 40px;
  padding: 1rem;
  background: ${props => props.color};
  margin-left: 2rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SortButton = (props) => (
  <Button color={props.color}className="sort__button"> {props.name}</Button>
)

export default SortButton;
