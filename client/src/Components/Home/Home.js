import React, { Component } from 'react'
import styled from 'styled-components';
import posed, {PoseGroup} from 'react-pose';
import {MainCont} from '../Main/styles';
import { HomeContext } from '../../Contexts/HomeContext';
import { colors } from '../../project/stylesheet'

import { AsideIntroBlock, HomeWrapper, SortPostWrap, Logotype, ReportButton, ContactBox } from './styles';
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
              <h3 style={{
                  color: 'white',

                }}>Välkommen till <br/> Campus Johanneberg</h3>
              <ReportButton className="reportbutton"color={colors.red}>Rapportera ett fel </ReportButton>
              <ContactBox color={colors.lightgrey}>
                <h5>Kontaktperson - Akademiska hus</h5>
                <p>Jan Henningsson</p>
                <p>Projektledare</p>
                <p>031-632554</p>
                <p>jan.henningsson@akademiskahus.se</p>
              </ContactBox>
          </AsideIntroBlock>

          <FlowSortContainer
            sortFeed={this.sortFeed.bind(this)}
            isOpen={this.state.isOpen}
            news={this.state.news}
            getAllNews={this.getAllNews.bind(this)}
            >
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
