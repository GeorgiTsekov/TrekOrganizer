import style from './Header.module.css'

const Header = () => {
    return (
        <nav className={style.header}>
            <div className={style.container}>
                <a className="py-2" href="#"><i class="fas fa-hiking"></i></a>
                <a className="py-2 d-none d-md-inline-block" href="#">Request Trek</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Hello, username</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Logout</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Login</a>
                <a className="py-2 d-none d-md-inline-block" href="#">Register</a>
            </div>
        </nav>
    );
}

export default Header;