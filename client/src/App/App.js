import React, { Component } from 'react';
import HomeProvider from '../Contexts/HomeContext';

import Main from '../Components/Main/Main';
import Header from '../Components/partials/Header/Header'
import Footer from '../Components/partials/Footer/Footer'
import { Route } from 'react-router-dom'

import { Div } from './styles'

import '../project/style__base.js'

class App extends Component {
  render() {
    return (
      <HomeProvider>
        <React.Fragment>
          <Header></Header>
          <Main>hej</Main>
        </React.Fragment>
      </HomeProvider>
    );
  }
}


export default App;
