import React, { useState } from 'react';

function LoginForm({ sendCredentials }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendCredentials(email, password);
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          name='email'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type='submit' value='Submit' />
      </form>
    </FormContainer>
  );
}
