import React, { Component } from 'react';

import Main from '../Components/Main/Main';
import Header from '../Components/partials/Header/Header'
import Footer from '../Components/partials/Footer/Footer'
import { Route } from 'react-router-dom'

import { Div } from './styles'

import '../project/style__base.js'

class App extends Component {
  render() {
    return (
      <Div>
        <Header></Header>
        <Main>hej</Main>
      </Div>
    );
  }
}


export default App;
