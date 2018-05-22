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
          toggleIsScrolled: (arg) => this.setState({ isScrolled: arg}),
        }}>
        {this.props.children}
      </HomeContext.Provider>
    )
  }
}

export default HomeProvider;
