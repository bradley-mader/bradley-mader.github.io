import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import MenuToggle from './MenuToggle/MenuToggle'

import './NavMenu.scss'

const Header = styled.div`
    @media print{
        display:none;
    }
`;

const NavSelector = styled.div`
    border-radius:40pt;
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
                            <img src="logo192.png" alt="Bradley Mader" style={{position:"absolute", top:"0px"}} tag={Link} to="/"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2">
                            <MenuToggle></MenuToggle>
                        </NavbarToggler>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse text-gradient-accent-to-bright" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem className="text-gradient-bright-to-light-hover">
                                    <NavLink tag={Link} to="/">
                                        <NavSelector>Home</NavSelector>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="text-gradient-bright-to-light-hover">
                                    <NavLink tag={Link} to="/AboutMe">
                                        <NavSelector>About Me</NavSelector>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="text-gradient-bright-to-light-hover">
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
