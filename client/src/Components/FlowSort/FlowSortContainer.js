import React, { Component } from 'react';
import SortButton from './SortButton/SortButton';
import styled from 'styled-components';

import { colors } from '../../project/stylesheet';

const Wrap = styled.div`
  margin-left: 22.5rem;
  padding: .5rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`
const h4 = styled.h4`

`
class FlowSort extends Component {

  render() {
    return (
      <Wrap>
        <h4>Sortera Nyhetsflöde:</h4>
        <SortButton name="Visa Alla" color={colors.purple} />
        <SortButton name="Driftinfo" color={colors.orange} />
        <SortButton name="Nyheter" color={colors.lightgrey} />
        <SortButton name="EventKalendern" color={colors.green} />
      </Wrap>
    );
  }

}

export default FlowSort;
