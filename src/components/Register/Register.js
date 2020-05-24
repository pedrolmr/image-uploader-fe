import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from './RegisterForm';
import axios from 'axios';
import { axiosWithAuth } from '../../utils/AxiosWithAuth';

function Register(props) {
  const history = useHistory();
  const sendCredentials = async (username, password) => {
    try {
      let user;
      if (username !== '') {
        user = { username, password };
      }
      user = { username, password };
      const res = await axiosWithAuth().post(`/register`, { ...user });
      console.log(res.data);

      axios.defaults.headers.common[
        'Authorization'
      ] = `Token ${res.data.token}`;

      localStorage.setItem('token', res.data.token);
      history.push('/');
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <Form sendCredentials={sendCredentials} />

      <h4>
        Already have an account? <Link to='/login'>Login Here</Link>
      </h4>
    </div>
  );
}

export default Register;
