import React, { useState } from 'react';
import { Redirect } from 'react-router';

const Register = () => {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        await fetch('https://localhost:44385/Identity/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName,
                email,
                password
            })
        });
        
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <form onSubmit={submit}>
            <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
            </div>

            <div className="form-label-group">
                <input type="text" id="inputUserName" name="userName" onChange={e => setUserName(e.target.value)} className="form-control" placeholder="userName" required="" />
                <label htmlFor="inputUserName">Username</label>
            </div>

            <div className="form-label-group">
                <input type="email" id="inputEmail" name="email" onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email" required="" />
                <label htmlFor="inputEmail">Email</label>
            </div>

            <div className="form-label-group">
                <input type="password" id="inputPassword" name="password" onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>

            <button className="btn btn-lg btn-dark btn-block" type="submit">Submit</button>

            <div className="text-center mb-4">
                <p className="alreadyUser"> Already have account? Then just <a href="#/user/login">Sign-In</a>!</p>
            </div>
            <p className="mt-5 mb-3 text-muted text-center">© The Trekking Zone - 2019.</p>
        </form>
    );
}

export default Register;