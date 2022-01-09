import { useNavigate } from "react-router";

import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from "../../contexts/NotificationContext";
import * as authService from '../../services/authService';
import InputFormComponent from "../Common/InputFormComponent/InputFormComponent";
import AuthValidations from "../Common/Validations/AuthValidations";

const Register = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    const {
        userNameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        rePasswordChangeHandler,
        errors
    } = AuthValidations();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let userName = formData.get('userName');
        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('rePassword');

        authService.register({ userName, email, password, rePassword })
            .then(res => {
                addNotification('You sign in successfully!', types.success);
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
                addNotification(err, types.error)
            })
    }
    return (
        <section className="contact-form">
            <div className="container">
                <div className="contact-heading">
                    <h1>Register</h1>
                    <h3>You can register your accound here.</h3>
                </div>
                <form id="contact" onSubmit={onRegisterHandler} method="POST">
                    <h3>Leave your query here</h3>
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="userName"
                        placeholder="Your Username"
                        onBlur={userNameChangeHandler}
                        errors={errors.userName}
                    />
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="email"
                        placeholder="Your Email Address"
                        onBlur={emailChangeHandler}
                        errors={errors.email}
                    />
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="password"
                        placeholder="Your Password"
                        onBlur={passwordChangeHandler}
                        errors={errors.password}
                    />
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="rePassword"
                        placeholder="Repeat Your Password"
                        onBlur={rePasswordChangeHandler}
                        errors={errors.rePassword}
                    />
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>

            </div>

        </section>
    )
}

export default Register;