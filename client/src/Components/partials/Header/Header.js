import React from 'react'

import { Header, Ul, Li, SLink, Div, Nav } from './styles.js';

class HeaderComponent extends React.Component {
  constructor() {
    super();

    this.nav = {
      '/': {
        color: 'DodgerBlue',
        isActive: true,
      },
      '/felanmalan': {
        color: 'Orange',
        isActive: false,
      }
    }
  }

  toggleNavColor = (target) => {
    this.setState({
      color: this.nav[target].color
    })
  }

  componentWillMount() {
    this.setState({
      color: this.nav[this.props.location.pathname].color
    })
  }

  render() {
    return (
      <Header>
        <Div color={this.state.color}/>
        <Nav>
          <Ul>
            <Li color="DodgerBlue" onClick={() => this.toggleNavColor('/')}><SLink to='/'>Hem</SLink></Li>
            <Li color="Orange" onClick={() => this.toggleNavColor('/felanmalan') }><SLink to='/felanmalan'>Felanmälan</SLink></Li>
          </Ul>
        </Nav>
      </Header>
    )
  }
}



export default HeaderComponent;
