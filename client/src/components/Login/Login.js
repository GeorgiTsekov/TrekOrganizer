import { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            UserName: '',
            Password: ''

        }
        this.UserName = this.UserName.bind(this);
        this.Password = this.Password.bind(this);
        this.login = this.login.bind(this);
    }

    UserName(event) {
        this.setState({ UserName: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }

    login(event) {
        fetch('https://localhost:44385/Identity/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UserName: this.state.UserName,
                Password: this.state.Password
            })
        })
            .then((Response) => Response.json())
            .then((Result) => {
                if (Result.Status == 'Invalid') {
                    alert('Invalid User');
                }
                else {
                    this.props.history.push("/categories/All");
                }
            });
    }

    render() {
        return (
            <form>
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputUserName" name="userName" className="form-control" placeholder="userName" onChange={this.UserName} required="" />
                    <label htmlFor="inputUserName">Username</label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" onChange={this.Password} required="" />
                    <label htmlFor="inputPassword">Password</label>
                </div>

                <button className="btn btn-lg btn-dark btn-block" onClick={this.login}>Sign In</button>

                <div className="text-center mb-4">
                    <p className="alreadyUser"> Don't have account? Then just <a href="#/user/register">Sign-Up</a>!</p>
                </div>
                <p className="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
            </form>
        )
    }
}

export default Login;