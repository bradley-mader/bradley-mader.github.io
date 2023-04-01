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
`;

const NavDropdown = styled.div`
    
    padding:1em;
    position: absolute;
    border-radius: 4px;
    min-width: 8em;
    z-index:100;
    @media (max-width: 575px){
        position:relative;
        padding:.5em;
    }
`;


export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            projectsShown: false,
        };
    }

        toggleNavbar () {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        }

        toggleProjectsDropdown(){
            this.setState({
                projectsShown: !this.state.projectsShown,
            });
        }

        showProjectsDropdown(){
            this.setState({
                projectsShown: !this.state.projecteShown,
            })
        }

        hideProjectsDropdown(){
            this.setState({
                projectsShown: false,
            })
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
                                    <NavLink tag={Link} to="/">
                                        <NavSelector>Home</NavSelector>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/AboutMe">
                                        <NavSelector>About Me</NavSelector>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Resume">
                                        <NavSelector>Resume</NavSelector>
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Navbar>
                  </Header>
            );
        }
}
