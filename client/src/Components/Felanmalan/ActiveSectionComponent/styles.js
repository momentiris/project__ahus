import styled from 'styled-components';
import { colors } from '../../../project/stylesheet';

export const AsideSort = styled.section`
  min-width: 300px;
  height: 400px;
  background: grey;
  margin-right: 2rem;

`
export const SuperSpan = styled.span`
	width: ${props => props.width};
`
export const Wrapper = styled.section`
  width: 100%;
  min-width: 500px;
  padding: 0rem 5rem 5rem 5rem;
  margin-top: 4rem;
  display: flex;
  flex-flow: row nowrap;
  text-align: left;

  overflow-y: scroll;
`
export const IssueListWrap = styled.section`
  width: 65%;
  min-height: 100%;
  border: 1px solid red;
  padding: 1rem;
  min-width: 700px;
`
export const IssueUl = styled.ul`
  padding: 0;
  width: 100%;
  border-top: 1px solid black;
  padding-top: 1rem;
  overflow-y: scroll;
  & > li:nth-child(even) {
    background: ${colors.lightgrey}
  }

`

export const IssueLi = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  list-style-type: none;
  width: 100%;
  padding: 10px 5px 10px 5px;
  &:before {
    content: '→'

  }
`
