import React from 'react';
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form,FormControl,NavDropdown} from 'react-bootstrap';
//import PropTypes from 'prop-types';
import './NavbarMain.css';

const NavbarMain = () => (
  <div id="MasterContainer">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/Teacher">Teacher Certifcation</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                
                <NavDropdown title="Actions" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">View Courses</NavDropdown.Item>
                    <NavDropdown.Divider /> 
                    <NavDropdown.Item href="/AxiosExample">Axios Example</NavDropdown.Item>
                    <NavDropdown.Item href="/postDataAxios">Post Data Example </NavDropdown.Item>
                    <NavDropdown.Item href="/HcadDataList">HCAD Records</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
);

NavbarMain.propTypes = {};

NavbarMain.defaultProps = {};

export default NavbarMain;
