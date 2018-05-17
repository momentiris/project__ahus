import React, { Component } from 'react'
import { injectGlobal } from 'styled-components';
import { AsideIntroBlock, HomeWrapper, SortPostWrap, Logotype } from './styles';
import ContentSlider from '../ContentSlider/ContentSlider';
import FlowSortContainer from '../FlowSort/FlowSortContainer';

import logo from './logotype/Obs_Aside.svg';

class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      introBlockActive: false,
    }
  }

  toggleBlock(arg) {
    this.setState({
      introBlockActive: arg ? true : false
    })
  }

  render() {
    return (
      <HomeWrapper className="home__wrapper">
        <Logotype src={logo} className="logotype" isBlockActive={this.state.introBlockActive} />
        <AsideIntroBlock className="aside__introblock" color={'grey'} isBlockActive={this.state.introBlockActive}>
        </AsideIntroBlock>

        <FlowSortContainer></FlowSortContainer>
        <ContentSlider toggleBlock={this.toggleBlock.bind(this)} isBlockActive={this.state.introBlockActive}>
        </ContentSlider>

      </HomeWrapper>
    )
  }
}

export default HomeComponent
