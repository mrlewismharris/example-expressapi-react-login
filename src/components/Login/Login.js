import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username, password
    });
    setToken(token);
  }

  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={e => setUsername(
              //@ts-ignore
              e.target.value
            )} />
        </label>
        <label>
          <p>Password:</p>
          <input type="text" onChange={e => setPassword(
              // @ts-ignore
              e.target.value
            )} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}