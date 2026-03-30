import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuToggle from './MenuToggle/MenuToggle';
import './NavMenu.scss';

const Header = styled.div`
    @media print{
        display:none;
    }
`;

const NavSelector = styled.div`
    border-radius:40pt;
    padding: 0 0.75em;
`;

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(prev => !prev);

  return (
    <Header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm" light>
        <NavbarBrand tag={Link} to="/">
          <img src="logo192.png" alt="Bradley Mader" style={{position:"absolute", top:"0px"}} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2">
          <MenuToggle />
        </NavbarToggler>
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse text-gradient-accent-to-bright" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem className="text-gradient-bright-to-light-hover">
              <NavLink tag={Link} to="/">
                <NavSelector>Home</NavSelector>
              </NavLink>
            </NavItem>
            <NavItem className="text-gradient-bright-to-light-hover">
              <NavLink tag={Link} to="/aboutme">
                <NavSelector>About Me</NavSelector>
              </NavLink>
            </NavItem>
            <NavItem className="text-gradient-bright-to-light-hover">
              <NavLink tag={Link} to="/resume">
                <NavSelector>Resume</NavSelector>
              </NavLink>
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </Header>
  );
};
