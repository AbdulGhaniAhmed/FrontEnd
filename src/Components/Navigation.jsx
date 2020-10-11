import React, { Component } from "react";
import {MDBNavbar,MDBNavbarBrand,MDBNavbarNav,MDBNavItem,MDBNavLink,MDBNavbarToggler,MDBCollapse,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem,MDBIcon,
} from "mdbreact";

class Navigation extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color=" brown darken-3" dark expand="md">
        <MDBNavbarBrand>
          <img src={require('./images/l1.png')} alt="There was a pic"></img>
        </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact-us">Contact</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about-us">About</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                  </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                  </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            
            <MDBNavbarNav right style={{marginRight:'30px'}}>
            <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret >
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">LogIn</MDBDropdownItem>
                    <MDBDropdownItem href="#!">LogOut</MDBDropdownItem>
                    <MDBDropdownItem href="#!">SignUP</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
              </MDBNavItem>
             
            </MDBNavbarNav>
          </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navigation;
