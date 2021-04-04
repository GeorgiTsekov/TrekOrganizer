import { NavLink } from 'react-router-dom';
import './CategoryNavigation.css'

const CategoryNavigation = () => {
    return (
        <nav className="categories-navbar">
            <ul>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/AllTreks">All Treks</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Hiking">Hiking</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/MountainWalking">Mountain Walking</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/MountainRunning">Mountain Running</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/MountainBiking">Mountain Biking</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/MountainLift">Mountain Lift</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/SkiSnowboard">Ski, Snowboard</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/RaftCanoeKayak">Raft, Canoe, Kayak</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/MultyActivity">Multy Activity</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/OtherTreks">Other Treks</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default CategoryNavigation;