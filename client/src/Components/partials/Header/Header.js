import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components';

import { S_header, S_Link } from './styles.js';


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <S_header>
    <nav>
      <ul>
        <li><S_Link to='/'>Home</S_Link></li>
        <li><S_Link to='/roster'>Roster</S_Link></li>
        <li><S_Link to='/schedule'>Schedule</S_Link></li>
      </ul>
    </nav>
  </S_header>
)


export default Header
