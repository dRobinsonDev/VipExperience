import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './HeaderNavBar.css';


export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(props) {
    return (
      <div className="HeaderNav">
        <Navbar color="dark" dark expand="md">
          <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Events</NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} onClick={this.toggle} exact to="/Services/">Our Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/Signup">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/Login">Login</NavLink>
              </NavItem>

              <NavItem>
                <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/Cart">My Cart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/About">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact Us
                </DropdownToggle>
                <DropdownMenu onClick={this.toggle} right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
