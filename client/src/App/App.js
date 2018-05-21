import React, { Component } from 'react';
import HomeProvider from '../Contexts/HomeContext';

import Main from '../Components/Main/Main';
import Header from '../Components/partials/Header/Header'
import Footer from '../Components/partials/Footer/Footer'
import {withRouter} from 'react-router'

import { Div } from './styles'

import '../project/style__base.js'

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <HomeProvider>
        <React.Fragment>
          {
            this.props.location.pathname != '/' && <Header></Header>
          }

          <Main>hej</Main>
        </React.Fragment>
      </HomeProvider>
    );
  }
}


export default withRouter(App);
