import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import HomeComponent from '../Home/Home';
import CampusSelector from '../CampusSelector/CampusSelector';
import Felanmalan from '../Felanmalan/Felanmalan';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { HomeContext } from '../../Contexts/HomeContext';
import FileIssueWrapper from '../Felanmalan/FileIssue/FileIssueWrapper';
import Styles from './styles.css';

const Main = ({location}, props) => (
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 700, exit: 400 }}
                    classNames="slide"
                >
                  <section className="route-section">
                    <HomeContext.Consumer>
                      {(context) => (
                      <Switch location={location}>
                        <Route exact path={'/'} component={CampusSelector}/>

                        <Route path={'/hem'} render={props => <HomeComponent serverEndpoint={'http://localhost:1337'} />} />
                        <Route path={'/felanmalan'} render={props => <Felanmalan context={context} location={location} serverEndpoint={'http://localhost:1337'} />}/>
                        <Route exact path={'/ny-felanmalan'} render={props => <FileIssueWrapper context={context} />}/>
                      </Switch>
                    )}
                    </HomeContext.Consumer>
                  </section>
                </CSSTransition>
            </TransitionGroup>
);

export default withRouter(Main);
