import React from 'react';
import {Link} from 'react-router-dom';

import {Nav} from './styles';

const Header = () => {
  return (
    
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/portfolio">Portfólio</Link>
      </Nav>

  )
}
export default Header;