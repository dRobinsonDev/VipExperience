import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
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
        <Navbar className="navColor" dark expand="md">
          <NavLink tag={RRNavLink} exact to="/" activeClassName=" logoText active">VIP EXPERIENCES</NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!this.props.user &&
                <NavItem>
                  <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/Signup">Signup</NavLink>
                </NavItem> }
              {!this.props.user && 
                <NavItem>
                  <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/Login">Login</NavLink>
              </NavItem> }

              <NavItem>
                <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/About">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/Products">Our Services </NavLink>
              </NavItem>

             { this.props.user &&  
              <NavItem>
                  <NavLink onClick={this.toggle} tag={RRNavLink} exact to="/Cart">My Cart</NavLink>
              </NavItem> }
             { this.props.user && 
              <NavItem> 
                < NavLink onClick={this.toggle} tag={RRNavLink} exact to="/">Logout</NavLink>
              </NavItem> }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
