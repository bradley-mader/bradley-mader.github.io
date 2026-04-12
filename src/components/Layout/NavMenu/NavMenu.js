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

const ProjectsLabel = styled(NavSelector)`
    color: #f8b640;
    background-image: linear-gradient(0deg, #f8b640, #7e338e);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    .text-gradient-bright-to-light-hover:hover & {
        background-image: linear-gradient(90deg, #7e338e, #dc4875, #7e338e);
        -webkit-text-fill-color: transparent;
    }
`;


const ProjectsDropdownMenu = styled.div`
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background-color: #251248;
    border: 1px solid #7e338e;
    border-radius: 10px;
    padding: 0.5rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 1000;
`;

const ProjectsDropdownItem = styled(Link)`
    display: block;
    padding: 0.5rem 1rem;
    color: #f8b640 !important;
    font-weight: bold;
    text-decoration: none;
    -webkit-text-fill-color: #f8b640;
    &:hover {
        background-color: #0F1133;
        color: #dc4875 !important;
        -webkit-text-fill-color: #dc4875;
    }
`;

export const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);

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
            <NavItem
              className="text-gradient-bright-to-light-hover"
              style={{position: 'relative'}}
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
              onClick={() => setProjectsOpen(prev => !prev)}
            >
              <NavLink tag={Link} to="#" onClick={(e) => e.preventDefault()}>
                <ProjectsLabel>Projects</ProjectsLabel>
              </NavLink>
              <ProjectsDropdownMenu $isOpen={projectsOpen}>
                <ProjectsDropdownItem to="/projects/amortization-calculator" onClick={() => setProjectsOpen(false)}>
                  Amortization Calculator
                </ProjectsDropdownItem>
              </ProjectsDropdownMenu>
            </NavItem>
            <NavItem className="text-gradient-bright-to-light-hover">
              <NavLink tag={Link} to="/blog">
                <NavSelector>Blog</NavSelector>
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
