import React, { useState } from 'react';
import axios from 'axios';
import { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  state = {};

  submit = e => {
    e.preventDefault();

    const data = {
      userName: this.userName,
      password: this.password,
    };

    axios.post('Identity/login', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.setState({
          loggedIn: true
        });
        this.props.setUser(res.data.user);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to={'/'} />;
    }

    return (
      <form onSubmit={this.submit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => this.userName = e.target.value} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => this.password = e.target.value} />
        </label>
        <div className="text-center mb-4">
          <p className="alreadyUser"> You haven't account? Then just <Link to="/register">Sign-Up</Link>!</p>
        </div>
        <p className="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}