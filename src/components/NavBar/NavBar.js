import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './NavBar.css';

function NavBar({ loggedIn }) {
  return (
    <div>
      <div>
        {loggedIn === false ? (
          <div>
            <Link exact to='/login'>
              Login
            </Link>{' '}
            |{' '}
            <Link exact to='/register'>
              Register
            </Link>
          </div>
        ) : (
          <Link exact to='/login' onClick={() => localStorage.clear()}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
export default withRouter(NavBar);
