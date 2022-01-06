import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="header" id="header">
            <div className="navbar-option">
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
                                <li><Link to="/trails">Trails</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/trek/all">Blog</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        </section>
    )
}

export default Header;