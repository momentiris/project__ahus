import React, { Component } from 'react'
import {withRouter} from 'react-router'
import { Ul, Li, SLink, Nav, Underscore } from './styles.js';
import { colors } from '../../../project/stylesheet.js'
import { HomeContext } from '../../../Contexts/HomeContext';
import logo from './logotype/Obs_Aside.svg';
import styled from 'styled-components';

 const Logotype = styled.img`
	${props => props.isBlockActive ? 'width: 75px; height: auto; top: .85rem;' : 'width: 150px; height:auto; top: 4rem'}
  position: absolute;
  left: 3rem;
  z-index: 3;
	transition: .4s ease;
  `

class HeaderComponent extends Component {
  constructor(props) {
    super();

    this.nav1 = React.createRef();
    this.nav2 = React.createRef();

    this.nav = {
      '/hem': {
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
    if (this.props.location.pathname != '/') {
      this.setState({
        color: this.nav[this.props.location.pathname] ?
        this.nav[this.props.location.pathname].color :
        colors.purple,
        navHome: this.props.location.pathname == '/hem' ? true : false,
      })

    }
  }

  render() {
    const { match, location, history } = this.props;

    return (
      <HomeContext.Consumer>
        {(context) => (
          <header className="header">
            <Logotype src={logo} className="logotype" isBlockActive={context.state.isScrolled} />
            <Nav color={this.state.color} className="navigation">

              <Ul>
                <Li innerRef={this.nav1}>
                  <SLink to='/hem' className="navlink" onClick={() => {
                      this.toggleNavColor('/hem');
                      context.toggleIsScrolled(false)
                    }}>Aktuellt på Campus</SLink>
                </Li>
                <Li innerRef={this.nav2}>
                  <SLink to='/felanmalan' className="navlink" onClick={() => {
                      this.toggleNavColor('/felanmalan');
                      context.toggleIsScrolled(true)}
                    }>Felanmälaren</SLink>
                </Li>
                <Underscore navHome={this.state.navHome ? true : false} width={this.state.navHome ? '180px' : '127px'}></Underscore>
              </Ul>
            </Nav>
          </header>
        )}
      </HomeContext.Consumer>

    )
  }

}



export default withRouter(HeaderComponent);
