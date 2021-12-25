import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {signout} from '../../actions';

const Header=(props)=> {
  const auth = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const logout = ()=>{
    dispatch(signout());
  }
  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span  className="nav-link" onClick={logout}>
            Signout
          </span>
        </li>
      </Nav>
    );
  };
  const renderNonLoggedLinks = () => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">
            Signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: 1 }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {auth.authenticate ? renderLoggedInLinks(): renderNonLoggedLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;