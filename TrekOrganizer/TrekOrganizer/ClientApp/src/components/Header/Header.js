import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
    return (
        <nav className={style.header}>
            <div className={style.container}>
                <Link className="py-2" to="/"><i class="fas fa-hiking"></i></Link>
                <Link className="py-2 d-none d-md-inline-block" to="/categories/All">Request Trek</Link>
                <Link className="py-2 d-none d-md-inline-block" to="/treks/create">Create Trek</Link>
                <Link className="py-2 d-none d-md-inline-block" to="#">Hello, username</Link>
                <Link className="py-2 d-none d-md-inline-block" to="#">Logout</Link>
                <Link className="py-2 d-none d-md-inline-block" to="#">Login</Link>
                <Link className="py-2 d-none d-md-inline-block" to="#">Register</Link>
            </div>
        </nav>
    );
}

export default Header;