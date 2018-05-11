import React, { Component } from 'react';

import Main from '../Components/Main/Main';
import Header from '../Components/partials/Header/Header';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main>hej</Main>
      </div>
    );
  }
}


export default App;
