import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <ul>
        <li>
          {loggedIn === true ? (
            <h1>You're logged in!</h1>
          ) : (
            <Link to='/login'> Please login </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Home;
