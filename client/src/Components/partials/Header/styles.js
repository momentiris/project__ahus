import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
import { breakpoints } from '../../../project/styled/helpers'

export const S_header = styled.header`
  display: flex;
  justify-content: center;
  background: grey;

  ${breakpoints.tablet`background: pink;`}
  ${breakpoints.phone`background: dodgerblue;`}
`

export const S_Link = styled(Link)`
  color: black;
  text-decoration: none;
    &:hover {
      color: white;
    }
`
