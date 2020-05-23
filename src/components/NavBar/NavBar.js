import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';

import './NavBar.css';

function NavBar({ loggedIn }) {
  //   const [loggedIn, setLoggedIn] = useState(false);
  //   useEffect(() => {
  //     const token = localStorage.getItem('token');
  //     if (!token) {
  //       setLoggedIn(false);
  //     } else {
  //       setLoggedIn(true);
  //     }
  //   }, []);

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
