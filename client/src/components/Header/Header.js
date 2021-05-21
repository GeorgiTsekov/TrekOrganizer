import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { Component } from 'react';

export default class Header extends Component {

    handleLogout = () => {
        localStorage.clear("token");
        this.props.setUser(null);
    };

    render() {
        let buttons;

        if (this.props.user) {
            buttons = (
                <div className={style.container}>
                    <Link className="py-2" to="/"><i className="fas fa-hiking"></i></Link>
                    <Link to="/categories/All" className="py-2 d-none d-md-inline-block">Request Trek</Link>
                    <Link to="#" className="py-2 d-none d-md-inline-block">Hello, {this.props.user.userName}</Link>
                    <Link to="/create/treks" className="py-2 d-none d-md-inline-block">Create Trek</Link>
                    <Link to="/about" className="py-2 d-none d-md-inline-block">About</Link>
                    <Link to="/" className="py-2 d-none d-md-inline-block" onClick={this.handleLogout}>Logout</Link>
                </div>
            )

        } else {
            buttons = (
                <div className={style.container}>
                    <Link className="py-2" to="/"><i className="fas fa-hiking"></i></Link>
                    <Link to="/login" className="py-2 d-none d-md-inline-block">Login</Link>
                    <Link to="/register" className="py-2 d-none d-md-inline-block">Register</Link>
                </div>
            )

        }

        return (
            <nav className={style.header}>
                {buttons}
            </nav>
        );
    }
}