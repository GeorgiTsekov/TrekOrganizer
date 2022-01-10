import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className="heading-top">
            <p>
                Categories
            </p>
            <nav className="navbar navbar-default">
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link to="/treks/all">All Treks</Link></li>
                        <li><Link to="">Hiking</Link></li>
                        <li><Link to="">Walking</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link to="">Biking</Link></li>
                        <li><Link to="">Lift</Link></li>
                        <li><Link to="">Skiing</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link to="">Running</Link></li>
                        <li><Link to="">Rafting</Link></li>
                        <li><Link to="">Other</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Categories;