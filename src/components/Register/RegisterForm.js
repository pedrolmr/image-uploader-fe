import React, { useState } from 'react';

function RegisterForm({ sendCredentials }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendCredentials(username, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          name='username'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default RegisterForm;
