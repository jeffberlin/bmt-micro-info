import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar
        fixed="top"
        expand="md"
        collapseOnSelect
        variant="light"
      >
        <Container>
          <Navbar.Brand href="https://www.bmtmicro.com">
            <Image
              src="https://info.bmtmicro.com/images/bmt-micro-nav-logo-min.png"
              alt="BMT Micro, Inc. Logo"
              width={120}
              className="d-inline-block"
            />
					</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
              <LinkContainer to="/general-information"><Nav.Link>General Information</Nav.Link></LinkContainer>
              <LinkContainer to="payments-refunds"><Nav.Link>Payments & Refunds</Nav.Link></LinkContainer>
              <LinkContainer to="downloading-delivery"><Nav.Link>Downloading & Delivery</Nav.Link></LinkContainer>
              <Nav.Link href="https://www.bmtmicro.com/contact">Contact</Nav.Link>
              <NavDropdown title="Login" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://vendors.bmtmicro.com">Vendors</NavDropdown.Item>
                <NavDropdown.Item href="https://affiliates.bmtmicro.com">Affiliates</NavDropdown.Item>
                <NavDropdown.Item href="https://customers.bmtmicro.com">Customers</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
