import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeComponent from '../Home/Home';
import CampusSelector from '../CampusSelector/CampusSelector';
import IssueContainer from '../IssueContainer/IssueContainer';



import { SMain } from './styles';


const routes = {
  '/': CampusSelector,
  '/hem': HomeComponent,
  '/felanmalan': IssueContainer
}

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      serverEndpoint: 'http://localhost:1337',
    };
  }

  render() {
    return (
      <SMain className="main__wrap">
        <Switch>
          <Route path={'/hem'} render={props => <HomeComponent serverEndpoint={this.state.serverEndpoint} />} />
          <Route exact path={'/'} component={CampusSelector}/>

          <Route path={'/felanmalan'} component={IssueContainer}/>


        </Switch>
      </SMain>

    )
  }

}

export default Main
