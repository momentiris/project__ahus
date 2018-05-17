import React, { Component } from 'react';

export const HomeContext = React.createContext();

class HomeProvider extends Component {
  state = {
    isScrolled: false,
    name: 'Andreas'
  }

  render() {
    return (
      <HomeContext.Provider value={{
          state: this.state,
          toggleIsScrolled: () => this.setState({ isScrolled: !this.state.isScrolled }),
        }}>
        {this.props.children}
      </HomeContext.Provider>
    )
  }
}

export default HomeProvider;
