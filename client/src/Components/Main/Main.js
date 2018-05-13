import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import FelanmalanComponent from '../Felanmalan/Felanmalan';

const routes = {
  '/': Home,
  '/felanmalan': FelanmalanComponent
}

const Main = () => (

  <main>
    <Switch>
      {
        Object.entries(routes).map(([path, name]) => {
          return (
            <Route key={path} exact path={path} component={name}/>
          )
        })
      }
    </Switch>
  </main>
)

export default Main
