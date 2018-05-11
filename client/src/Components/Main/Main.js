import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components';
import Home from '../Home/Home'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
)


export default Main
