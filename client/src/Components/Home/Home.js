import React, { Component } from 'react'
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose';
import {MainCont} from '../Main/styles';
import { HomeContext } from '../../Contexts/HomeContext';


import { AsideIntroBlock, HomeWrapper, SortPostWrap, Logotype } from './styles';
import ContentSlider from '../ContentSlider/ContentSlider';
import FlowSortContainer from '../FlowSort/FlowSortContainer';

import RequestService from '../../utils/RequestService';
import logo from './logotype/Obs_Aside.svg';

import { Loader } from '../Loading/loading'

class HomeComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      introBlockActive: false,
      news: [],
      isOpen: false,
      type: 'all'
    }
  }

  getAllNews = async () => {
    const entries = await RequestService.getRequest(`${this.props.serverEndpoint}/news`);
    await setTimeout(() => this.setState({
      news: [...entries],
      allnews: [...entries],
    }), 1000)
  }

  getNewsByType = async (type) => {
      const news = await RequestService.getRequestByType(`${this.props.serverEndpoint}/news/${type}`);
      await this.setState({
        news: [...news],
      })
  }

   componentWillMount() {
    this.getAllNews();
  }

  toggleBlock(arg) {
    this.setState({
      introBlockActive: arg ? true : false
    })
  }

  toggleContent(){
    this.setState({
      isOpen: !this.state.isOpen
     });
  }

  sortFeed = async _type => {
    await this.setState({type: _type})
  }


  render() {
    return (

      <HomeContext.Consumer>
  		 	{(context) => (
        <HomeWrapper className="home__wrapper">
          <AsideIntroBlock
            className="aside__introblock"
            color={'grey'}
            isBlockActive={context.state.isScrolled}>
          </AsideIntroBlock>

          <FlowSortContainer
            sortFeed={this.sortFeed.bind(this)}
            isOpen={this.state.isOpen}
            news={this.state.news}
            getAllNews={this.getAllNews.bind(this)}
            getNewsByType={this.getNewsByType}>
          </FlowSortContainer>
          {
            this.state.news.length > 0 ? (
            <ContentSlider
              type={this.state.type}
              toggleContent={this.toggleContent.bind(this)}
              isOpen={this.state.isOpen}
              toggleBlock={this.toggleBlock.bind(this)}
              isBlockActive={this.state.introBlockActive}
              news={this.state.news}>
            </ContentSlider>
          ) : <Loader></Loader>
          }
        </HomeWrapper>
      )}
    </HomeContext.Consumer>

    )
  }
}

export default HomeComponent
