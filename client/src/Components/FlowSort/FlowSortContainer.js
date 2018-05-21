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
`

class FlowSortContainer extends Component {
  constructor(props) {
    super();
    console.log(props);

  }


  render() {
    return (
      <Wrap>
        <h4>Sortera Nyhetsflöde:</h4>
        <SortButton sortFeed={() => this.props.sortFeed('all')} name="Visa Alla" color={colors.purple} />
        <SortButton sortFeed={() => this.props.sortFeed('drift')} name="Driftinfo" color={colors.yellow} />
        <SortButton sortFeed={() => this.props.sortFeed('news')} name="Nyheter" color={colors.lightgrey} />
        <SortButton sortFeed={() => this.props.sortFeed('event')} name="EventKalendern" color={colors.green} />
      </Wrap>
    );
  }

}

export default FlowSortContainer;
