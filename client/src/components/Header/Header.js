import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { Component } from 'react';

export default class Header extends Component {

    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
    };

    render() {
        let buttons;

        if (this.props.user) {
            buttons = (
                <div className={style.container}>
                    <Link className="py-2 d-none d-md-inline-block" to="/categories/All">Request Trek</Link>
                    <Link className="py-2 d-none d-md-inline-block" to="#">Hello, {this.props.user.userName}</Link>
                    <Link className="py-2 d-none d-md-inline-block" to="/create/treks">Create Trek</Link>
                    <Link className="py-2 d-none d-md-inline-block" to="/" onClick={this.handleLogout}>Logout</Link>
                </div>
            )

        } else {
            buttons = (
                <div className={style.container}>
                    <Link className="py-2 d-none d-md-inline-block" to="/login">Login</Link>
                    <Link className="py-2 d-none d-md-inline-block" to="/register">Register</Link>
                </div>
            )

        }

        return (
            <nav className={style.header}>
                <div className={style.container}>
                    <Link className="py-2" to="/"><i class="fas fa-hiking"></i></Link>
                </div>
                {buttons}
            </nav>
        );
    }
}