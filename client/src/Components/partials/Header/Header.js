import React, { Component } from 'react'
import {withRouter} from 'react-router'
import { Ul, Li, SLink, Nav, Underscore } from './styles.js';
import { colors } from '../../../project/stylesheet.js'
import { HomeContext } from '../../../Contexts/HomeContext';
import logo from './logotype/Obs_Aside.svg';
import styled from 'styled-components';

 const Logotype = styled.img`
	${props => props.isBlockActive ?
    'width: 75px; height: auto; transform: translate(0px, 3px);' :
    'width: 150px; height:auto; transform: translate(-25px, 20px);'}
    position: absolute;
  left: 3rem;
  top: .75rem;
  z-index: 3;
	transition: .3s ease;
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
      // this.setState({
      //   color: this.nav[this.props.location.pathname] ?
      //   this.nav[this.props.location.pathname].color :
      //   colors.purple,
      //   navHome: this.props.location.pathname == '/hem' ? true : false,
      // })

    }
  }

  render() {
    const { match, location, history } = this.props;

    return (
      <HomeContext.Consumer>
        {(context) => (
          <header className="header">
            <Logotype src={logo} className="logotype" isBlockActive={context.state.isScrolled} />
            <Nav color={location.pathname === '/hem' ? colors.purple : colors.red} className="navigation">

              <Ul>
                <Li innerRef={this.nav1}>
                  <SLink to='/hem' className="navlink" onClick={() => {

                      context.toggleIsScrolled(false)
                    }}>Aktuellt på Campus</SLink>
                </Li>
                <Li innerRef={this.nav2}>
                  <SLink to='/felanmalan/map' className="navlink" onClick={() => {

                      context.toggleIsScrolled(true)}
                    }>Felanmälaren</SLink>
                </Li>
                <Underscore navHome={location.pathname === '/hem' ? true : false} width={location.pathname === '/hem' ? '180px' : '127px'} />
              </Ul>
            </Nav>
          </header>
        )}
      </HomeContext.Consumer>

    )
  }

}



export default withRouter(HeaderComponent);
