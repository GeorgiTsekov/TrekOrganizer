import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getNodeText } from '@testing-library/dom';
import { Redirect } from 'react-router';

let currentToken = '';

async function loginUser(credentials) {
  return fetch('https://localhost:44385/Identity/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
    .then((response) => {
      response.json()
        .then((result) => {
          console.warn("result", result);
          currentToken = result;
          localStorage.setItem('login', JSON.stringify({
            login: true,
            token: result.token
          }))
        })
    })
    .then(() => {
      Redirect("/");
    })
}

export default function Login({ setToken }) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password
    });
    setToken = () => {
      setToken(token)
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
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
};