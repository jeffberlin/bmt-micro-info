import React from 'react';
import { Container, Navbar, Image, Nav, NavDropdown } from 'react-bootstrap';

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
          <Navbar.Brand href="/">
            <Image
              src="https://www.bmtmicro.com/images/bmt-micro-nav-logo-min.png"
              alt="BMT Micro, Inc. Logo"
              width={120}
              className="d-inline-block"
            />
					</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>General Information</Nav.Link>
              <Nav.Link>Payments & Refunds</Nav.Link>
              <Nav.Link>Downloading & Delivery</Nav.Link>
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
