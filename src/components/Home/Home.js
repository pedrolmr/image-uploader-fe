import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import UserInfo from '../UserInfo/UserInfo';

function Home({ loggedIn }) {
  return (
    <div>
      <ul>
        <li>
          {loggedIn === true ? (
            <UserInfo />
          ) : (
            <h1>Hi, please sign in/sign up to see content</h1>
          )}
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Home);
