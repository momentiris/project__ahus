import React, { Component } from 'react'

import { AsideIntroBlock, HomeWrapper, H2,Div, SortPostWrap } from './styles';
import ContentSlider from '../ContentSlider/ContentSlider';
import FlowSortContainer from '../FlowSort/FlowSortContainer';

class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      introBlockActive: false,
    }
  }
  toggleBlock(arg) {
    if (arg) {
      this.setState({
        introBlockActive: true,
      })
    }
    else {
      this.setState({
        introBlockActive: false,
      })
    }
  }

  render() {
    return (
      <HomeWrapper className="home__wrapper">
        <AsideIntroBlock className="aside__introblock" color={'grey'} isBlockActive={this.state.introBlockActive} />
        <Div className="home__header__text">
          <H2>Aktuellt på ditt campus.</H2>
        </Div>
        <FlowSortContainer></FlowSortContainer>
        <ContentSlider toggleBlock={this.toggleBlock.bind(this)} isBlockActive={this.state.introBlockActive}>
        </ContentSlider>

      </HomeWrapper>
    )
  }
}

export default HomeComponent
