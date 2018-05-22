import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomeComponent from '../Home/Home';
import CampusSelector from '../CampusSelector/CampusSelector';
import IssueContainer from '../IssueContainer/IssueContainer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Styles from './styles.css';

const Main = ({location}) => (
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 700, exit: 400 }}
                    classNames="slide"
                >
                  <section className="route-section">
                      <Switch location={location}>
                        <Route  exact path={'/'} component={CampusSelector}/>
                        <Route path={'/hem'} render={props => <HomeComponent serverEndpoint={'http://localhost:1337'} />} />
                        <Route  path={'/felanmalan'} component={IssueContainer}/>
                      </Switch>
                  </section>
                </CSSTransition>
            </TransitionGroup>
);

export default withRouter(Main);
