import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Form from './LoginForm';

function Login(props) {
  const sendCredentials = async (email, password) => {
    try {
      let user;
      if (email !== '') {
        user = { email, password };
      }
      user = { email, password };
      const res = await axios.post('/login', { ...user });
      if (res) {
        localStorage.setItem('token', res.data.key);
        props.history.push('/');
      } else {
        console.log('error no res!!');
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <LoginPage>
      <h1>Login Page</h1>
      <Form sendCredentials={sendCredentials} />

      <h4>
        Don't have an account? <Link to='/register'>Register Here</Link>
      </h4>
    </LoginPage>
  );
}

export default Login;
