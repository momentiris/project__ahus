import React, { Component } from 'react';
import SortButton from './SortButton/SortButton';
import styled from 'styled-components';

import { colors } from '../../project/stylesheet';

const Wrap = styled.div`
  margin-left: 22.5rem;
  padding: 2.5rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin-bottom: 1rem;
`

class FlowSortContainer extends Component {
  constructor(props) {
    super();
  }


  render() {
    return (
      <Wrap>
        <p>Sortera Nyhetsflöde:</p>
        <SortButton sortFeed={() => this.props.sortFeed('all')} name="Visa Alla" color={colors.purple} />
        <SortButton sortFeed={() => this.props.sortFeed('drift')} name="Driftinfo" color={colors.yellow} />
        <SortButton sortFeed={() => this.props.sortFeed('news')} name="Nyheter" color={colors.browngrey} />
        <SortButton sortFeed={() => this.props.sortFeed('event')} name="EventKalendern" color={colors.green} />
      </Wrap>
    );
  }

}

export default FlowSortContainer;
