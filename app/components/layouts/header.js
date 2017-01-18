import React from 'react';
import { Link } from 'react-router';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <header className="primary-header">
      <Navbar collapseOnSelect>
        <Navbar.Header>
         <Navbar.Brand>
           <a >User App</a>
         </Navbar.Brand>
         <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <div className="pull-right logout-button">
            <Link   to="/"><button>Logout</button></Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
     </header>
  );
}
