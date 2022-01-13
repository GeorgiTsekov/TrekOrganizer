import { Link } from 'react-router-dom';

import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
    const { user, isAuthenticated } = useAuthContext();

    let guestNavigation = (
        <ul className="nav navbar-nav navbar-left">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    )

    let userNavigation = (
        <ul className="nav navbar-nav navbar-left">
            <li><Link to="/profile">Welcome, {user.userName}</Link></li>
            <li><Link to="/treks/create">Create Trek</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
    )
    return (
        <section className="header" id="header">
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/"><img src="/images/logo.png" alt="" /></Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-left">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/treks/all">Treks</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                            {isAuthenticated ? userNavigation : guestNavigation}
                        </div>
                    </nav>
            </div>

        </section>
    )
}

export default Header;