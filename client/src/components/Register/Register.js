import React, { Component } from 'react';

class Register extends Component {

    constructor() {
        super();

        this.state = {
            UserName: '',
            Email: '',
            Password: ''
        }

        this.UserName = this.UserName.bind(this);
        this.Email = this.Email.bind(this);
        this.Password = this.Password.bind(this);
        this.Password = this.Password.bind(this);
        this.register = this.register.bind(this);
    }

    UserName(event) {
        this.setState({ UserName: event.target.value })
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }

    register(event) {
        fetch('https://localhost:44385/Identity/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password,
                Email: this.state.Email
            })
        })
            .then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Success') {
                    this.props.history.push("/Dashboard");
                }
                else {
                    alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
                }
            })
    }
    render() {

        return (
            <form>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputUserName" name="userName" onChange={this.UserName} className="form-control" placeholder="userName" required="" />
                    <label htmlFor="inputUserName">Username</label>
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputEmail" name="email" onChange={this.Email} className="form-control" placeholder="Email" required="" />
                    <label htmlFor="inputEmail">Email</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" name="password" onChange={this.Password} className="form-control" placeholder="Password" required="" />
                    <label htmlFor="inputPassword">Password</label>
                </div>

                <button className="btn btn-lg btn-dark btn-block" type="submit" onClick={this.register}>Sign In</button>

                <div className="text-center mb-4">
                    <p className="alreadyUser"> Already have account? Then just <a href="#/user/login">Sign-In</a>!</p>
                </div>
                <p className="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
            </form>
        );
    }
}

export default Register;