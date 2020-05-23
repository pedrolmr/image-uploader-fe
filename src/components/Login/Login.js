import React from 'react';
import { axiosWithAuth } from '../../utils/AxiosWithAuth';
import { Link, useHistory } from 'react-router-dom';
import LoginForm from './LoginForm';

function Login(props) {
  const history = useHistory();
  const sendCredentials = async (username, password) => {
    try {
      let user;
      if (username !== '') {
        user = { username, password };
      }
      user = { username, password };
      const res = await axiosWithAuth().post('/login', { ...user });
      if (res) {
        localStorage.setItem('token', res.data.token);
        history.push('/');
      } else {
        console.log('error no res!!');
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm sendCredentials={sendCredentials} />

      <h4>
        Don't have an account? <Link to='/register'>Register Here</Link>
      </h4>
    </div>
  );
}

export default Login;
