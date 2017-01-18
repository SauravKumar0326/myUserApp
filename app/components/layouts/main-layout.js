import React from 'react';
import { Link } from 'react-router';
import Header from './header';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div>
      <Header/>
    <div className="app">
      <aside className="primary-aside">
        <ul>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
          <li><Link to="/widgets" activeClassName="active">Scan data</Link></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    </div>
    );
}
