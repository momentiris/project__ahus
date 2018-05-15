import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeComponent from '../Home/Home'
import IssueContainer from '../IssueContainer/IssueContainer';

import { SMain } from './styles';


const routes = {
  '/': HomeComponent,
  '/felanmalan': IssueContainer
}

const Main = () => (

  <SMain className="main__wrap">
    <Switch>
      {
        Object.entries(routes).map(([path, name]) => {
          return (
            <Route key={path} exact path={path} component={name}/>
          )
        })
      }
    </Switch>
  </SMain>
)

export default Main
