import axios from 'axios';
import { Component } from 'react';
import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    state = {};
    
    submit = async (e) => {
        e.preventDefault();

        const data = {
            userName: this.userName,
            email: this.email,
            password: this.password,
        };

        await axios.post('Identity/register', data)
            .then(res => {
                console.log(res)
                this.setState({
                    success: true
                  });
            });
    }
    
    render() {
        if (this.state.success) {
            return <Redirect to={'/login'} />;
          }

        return (
            <form onSubmit={this.submit} >
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => this.userName = e.target.value} />
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" onChange={e => this.email = e.target.value} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => this.password = e.target.value} />
                </label>
                <div className="text-center mb-4">
                    <p className="alreadyUser"> Already have account? Then just <Link to="/login">Sign-In</Link>!</p>
                </div>
                <p className="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}