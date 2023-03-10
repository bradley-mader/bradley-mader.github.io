import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

import styled from 'styled-components';

const ProfileTitle = styled.div`
    position: absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    display: block;
    @media (max-width : 660px){
        display:none;
    }
`;

const Header = styled.div`
    @media print{
        display:none;
    }
`;

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
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3" light>
                        <NavbarBrand tag={Link} to="/">    
                            <img src="initials.svg" height="40px"  tag={Link} to="/"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Resume">Resume</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Navbar>
                  </Header>
            );
        }
}
