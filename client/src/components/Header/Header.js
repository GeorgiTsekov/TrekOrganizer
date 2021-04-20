import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = (props) => {
    return (
        <nav className={style.header}>
            <div className={style.container}>
                <Link className="py-2" to="/"><i class="fas fa-hiking"></i></Link>
                <Link className="py-2 d-none d-md-inline-block" to="/categories/All">Request Trek</Link>
                <Link className="py-2 d-none d-md-inline-block" to="/treks/create">Create Trek</Link>
                <Link className="py-2 d-none d-md-inline-block" to="#">Hello, {props.userName}</Link>
                <Link className="py-2 d-none d-md-inline-block" to="/logout">Logout</Link>
                <Link className="py-2 d-none d-md-inline-block" to="/login">Login</Link>
                <Link className="py-2 d-none d-md-inline-block" to="/register">Register</Link>
            </div>
        </nav>
    );
}

export default Header;