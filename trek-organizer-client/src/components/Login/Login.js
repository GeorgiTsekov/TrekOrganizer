import { useNavigate } from "react-router";

import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from "../../contexts/NotificationContext";
import * as authService from '../../services/authService';

const Login = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let userName = formData.get('userName');
        let password = formData.get('password');

        authService.login({ userName, password })
            .then((authData) => {
                login(authData);
                addNotification('You logged in successfully!', types.success);
                navigate('/trek/all');
            })
            .catch(err => {
                console.log(err);
                addNotification(err.title, types.error)
            })
    }
    return (
        <section className="contact-form">
            <div className="container">
                <div className="contact-heading">
                    <h1>Login</h1>
                    <h3>You can login with your accound here.</h3>
                </div>
                <form id="contact" onSubmit={onLoginHandler} method="POST">
                    <h3>Leave your query here</h3>
                    <fieldset>
                        <input placeholder="Your Username" name="userName" type="text" />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Password" name="password" type="password" />
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>

            </div>

        </section>
    )
}

export default Login;