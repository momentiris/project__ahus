import styled from 'styled-components';


export const Wrap = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  background: ${props => props.color};
`

export const Logotype = styled.img`
  width: 200px;
  height: 200px;
`
