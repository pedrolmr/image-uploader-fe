import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Home({ loggedIn }) {
  // const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     setLoggedIn(false);
  //   } else {
  //     setLoggedIn(true);
  //   }
  // }, []);

  return (
    <div>
      <ul>
        <li>
          {loggedIn === true ? (
            <h1>You're logged in!</h1>
          ) : (
            <h1>Hi, please sign in/sign up to see content</h1>
          )}
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Home);
