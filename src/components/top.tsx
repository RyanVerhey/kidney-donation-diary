import * as React from 'react';
import { Link } from '@reach/router';
import Logo from './logo';

const Top = () => {
  return (
    <header id="page-header">
      <div id="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <p>Hi, I'm Ryan, and I gave one of my kidneys away. Please join me on my organ donation journey.</p>
    </header>
  );
}

export default Top;
