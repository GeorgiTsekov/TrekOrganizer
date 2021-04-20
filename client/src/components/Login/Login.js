import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import * as userService from '../../services/userService';

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState();

  const submit = async (e) => {
    e.preventDefault();
    // const token = await userService.loginUser({
    //   userName,
    //   password
    // });

    await fetch('https://localhost:44385/Identity/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        password
      })
    })
    .then((response) => {
      response.json()
        .then((result) => {
          localStorage.setItem('token', result.token)
        })
    })

    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={submit}>
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
  )
}

export default Login;