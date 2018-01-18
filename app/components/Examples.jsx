import React from 'react';
import {Link} from 'react-router';

let Examples = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are few locations to try out:</p>
        <ol>
          <li><Link to="/?location=Pune">Pune</Link></li>
          <li><Link to="/?location=Delhi">Delhi</Link></li>
        </ol>
      </div>
    );
  };

module.exports = Examples;
