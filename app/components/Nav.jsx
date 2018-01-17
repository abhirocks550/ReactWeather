import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = (props) => {
    return (
      <div>
        <h1>Nav Component</h1>
        <IndexLink to="/" activeClassName='active' activeStyle=
          {{ fontWeight: 'bold' }}>
          Get Weather</IndexLink> <br/>
        <Link to="/about" activeClassName='active' activeStyle=
          {{ fontWeight: 'bold' }}>
          About</Link> <br/>
        <Link to="/examples" activeClassName='active' activeStyle=
          {{ fontWeight: 'bold' }}>
          Examples</Link> <br/>
      </div>
    );
  };

module.exports = Nav;
