import React from 'react'
import {withRouter} from 'react-router'
import { Ul, Li, SLink, Nav, Underscore } from './styles.js';

import { colors } from '../../../project/stylesheet.js'



class HeaderComponent extends React.Component {
  constructor() {
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


  componentWillMount() {
    this.setState({
      color: this.nav[this.props.location.pathname].color,
      navHome: this.props.location.pathname == '/' ? true : false,
    })
  }

  toggleUnderscore() {
    
    this.setState({
      navHome: !this.state.navHome
    })
  }

  render() {
    const { match, location, history } = this.props;

    return (
      <header className="header">
        <Nav color={this.state.color} className="navigation">

          <Ul>
            <Li innerRef={this.nav1}>
              <SLink to='/' onClick={() => {this.toggleNavColor('/')}}>Aktuellt på Campus</SLink>
            </Li>
            <Li innerRef={this.nav2}><SLink to='/felanmalan' onClick={() => this.toggleNavColor('/felanmalan') }>Felanmälan</SLink></Li>
            {

            <Underscore navHome={this.state.navHome ? true : false} width={this.state.navHome ? '176px' : '104px'}></Underscore>
            }
          </Ul>
        </Nav>
      </header>
    )
  }
}



export default withRouter(HeaderComponent);
