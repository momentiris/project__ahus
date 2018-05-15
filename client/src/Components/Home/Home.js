import React, { Component } from 'react'

import { AsideIntroBlock, HomeWrapper, SliderSection } from './styles';
import ContentSlider from '../ContentSlider/ContentSlider';

class HomeComponent extends Component {

  render() {
    return (
      <HomeWrapper className="home__wrapper">
        <AsideIntroBlock className="aside__introblock" color={'grey'}/>

        <ContentSlider>
        </ContentSlider>

      </HomeWrapper>
    )
  }
}

export default HomeComponent
