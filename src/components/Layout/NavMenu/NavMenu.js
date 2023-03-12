import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import './NavMenu.scss'

const Header = styled.div`
    @media print{
        display:none;
    }
`;

const NavSelector = styled.div`
    border-radius:40pt;
`

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

        toggleNavbar () {
            this.setState({
                collapsed: !this.state.collapsed
            });
        }

        render () {
            return (
                <Header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm" light>
                        <NavbarBrand tag={Link} to="/">    
                            <img src="initials.svg" alt="Bradley Mader" height="40px"  tag={Link} to="/"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark text-centered" to="/">
                                        <NavSelector className="bright-text-on-hover">Home</NavSelector>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark text-centered" to="/Resume">
                                        <NavSelector className="bright-text-on-hover">Resume</NavSelector>
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Navbar>
                  </Header>
            );
        }
}
