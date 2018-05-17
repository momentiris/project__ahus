import React, { Component } from 'react'
import {withRouter} from 'react-router'
import { Ul, Li, SLink, Nav, Underscore, Logotype } from './styles.js';

import { colors } from '../../../project/stylesheet.js'

import { HomeContext } from '../../../Contexts/HomeContext';


class HeaderComponent extends Component {
  constructor(props) {
    super();

    this.nav1 = React.createRef();
    this.nav2 = React.createRef();

    this.nav = {
      '/': {
        color: colors.purple,
        isActive: true,
      },
      '/felanmalan': {
        color: colors.red,
        isActive: false,
      }
    }
  }

  toggleNavColor = async (target, e) => {
    await this.setState({
      color: this.nav[target].color,
    })
    this.toggleUnderscore(e);
  }

  toggleUnderscore() {
    this.setState({
      navHome: !this.state.navHome
    })
  }

  componentWillMount() {
    this.setState({
      color: this.nav[this.props.location.pathname].color,
      navHome: this.props.location.pathname == '/' ? true : false,
    })
  }

  render() {
    const { match, location, history } = this.props;

    return (

      <HomeContext.Consumer>
        {(context) => (
          <header className="header">
            <Nav color={this.state.color} className="navigation">
              
              <Ul>
                <Li innerRef={this.nav1}>
                  <SLink to='/' onClick={() => {this.toggleNavColor('/')}}>Aktuellt på Campus</SLink>
                </Li>
                <Li innerRef={this.nav2}>
                  <SLink to='/felanmalan' onClick={() => this.toggleNavColor('/felanmalan') }>Felanmälan</SLink>
                </Li>
                <Underscore navHome={this.state.navHome ? true : false} width={this.state.navHome ? '176px' : '104px'}></Underscore>
              </Ul>
            </Nav>
          </header>
        )}
      </HomeContext.Consumer>

    )
  }
}



export default withRouter(HeaderComponent);
