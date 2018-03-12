import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () =>{
 return (
    <div className=".navbar-default">
      <Navbar className="topNavBar" fixedTop>
        <Navbar.Header>
          <Navbar.Brand className="logo">
            <a href="#home"><span>Jeffrey Lee</span></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text className="navText">
              <span>The personal website of an aspiring web developer</span>
          </Navbar.Text>      
          <Nav pullRight>
            <NavItem eventKey={1} href="#" className="navTextButton">
                <div>Resume</div>
            </NavItem>
            <NavItem eventKey={2} href="#" className="navTextButton">
                <div>Portfolio</div>
            </NavItem>
            <NavItem eventKey={3} href="#" className="navTextButton">
                <div>Contact Me</div>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;