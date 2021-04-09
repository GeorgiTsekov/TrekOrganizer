import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="header" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">TrekOrganizer</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="nav container">
                                <NavItem>
                                    <NavLink tag={Link} className="py-2" to="/"><i class="fas fa-hiking"></i></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="py-2 d-none d-md-inline-block" to="/categories/All">Request Trek</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="py-2 d-none d-md-inline-block" to="/treks/create">Create Trek</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="py-2 d-none d-md-inline-block" to="/counter">Counter</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="py-2 d-none d-md-inline-block" to="/fetch-data">Fetch data</NavLink>
                                </NavItem>
                                <LoginMenu>
                                </LoginMenu>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
