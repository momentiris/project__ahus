import React, { Component } from 'react';

import Main from '../Components/Main/Main';
import Header from '../Components/partials/Header/Header'
import Footer from '../Components/partials/Footer/Footer'
import { Route } from 'react-router-dom'

import '../project/style__base.js'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Header}/>
        <Main>hej</Main>
        <Route path='/' component={Footer}/>
      </div>
    );
  }
}


export default App;
