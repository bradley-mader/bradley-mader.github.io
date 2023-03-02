import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

import styled from 'styled-components';

const ProfileLogo = styled.div`
    height: 3em;
    width: 4em;
`;

const ProfileLogoLeftTop = styled.div`
    position: absolute;
    width: 30%;
    top: 0%;
    height: 30%;
    padding: .05em;
    
    > *{
        height:100%;
        width:100%;
        border-radius: .1em .5em;
        background-color: #6B9B8A;
    }
`;

const ProfileLogoLeftBottom = styled.div`
    position: absolute;
    top:30%;
    width: 30%;
    height: 70%;
    padding:.05em;

    > div{
        height:100%;
        width:100%;
        border-radius: .5em;
        border-bottom-right-radius: .1em;
        border-top-right-radius: .1em;
        background-color: #6B9B8A;
        overflow: hidden;
    }
`;

const ProfileLogoCenter = styled.div`
    position: absolute;
    top:0%;
    left: 30%;
    width: 40%;
    height: 100%;
    padding:.05em;
    > *{
        height:100%;
        width:100%;
        border-radius: .5em;
        border-bottom-left-radius: .1em;
        background-color: #6B9B8A;
        overflow: hidden;
    }
`;

const ProfileLogoRight = styled.div`
    position: absolute;
    top:0%;
    left:70%
    width: 30%;
    height: 100%;
    padding: .05em;
    > *{
        height:100%;
        width:90%;
        background-color: #6B9B8A;
        overflow: hidden;
        border-radius: .5em;
        border-bottom-right-radius: .1em;
    }
`;

const Header = styled.div`
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
                        <Container>
                            <NavbarBrand tag={Link} to="/">
                                <ProfileLogo>
                                        <ProfileLogoLeftTop><div /></ProfileLogoLeftTop>
                                        <ProfileLogoLeftBottom><div /></ProfileLogoLeftBottom>
                                        <ProfileLogoCenter><div /></ProfileLogoCenter>
                                        <ProfileLogoRight><div /></ProfileLogoRight>
                                </ProfileLogo>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/Blog">Blog</NavLink>
                                    </NavItem>
                                </ul>
                            </Collapse>
                        </Container>
                    </Navbar>
                  </Header>
            );
        }
}
