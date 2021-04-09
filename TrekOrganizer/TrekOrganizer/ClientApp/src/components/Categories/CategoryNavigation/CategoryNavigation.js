import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import '/CategoryNavigation.css'

const CategoryNavigation = () => {
    return (
        <nav className="categories-navbar">
            <ul>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/All">All</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Hiking">Hiking</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Walking">Walking</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Running">Running</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Biking">Biking</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Lift">Lift</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Skiing">Skiing</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Rafting">Rafting</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link-selected" to="/categories/Other">Other</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default CategoryNavigation;