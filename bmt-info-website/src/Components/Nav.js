import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  const dropdownNavStyle = {
    color: 'rgba(0, 0, 0, .5)',
  }
  return (
    <>
      <Navbar
        fixed="top"
        expand="md"
        collapseOnSelect
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
              <LinkContainer to="/">
                <Nav.Link className="main-link" eventKey="1">
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="general-information">
                <Nav.Link className="main-link" eventKey="2">
                  General Information
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="payments-refunds">
                <Nav.Link className="main-link" eventKey="3">
                  Payments & Refunds
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="downloading-delivery">
                <Nav.Link className="main-link" eventKey="4">
                  Downloading & Delivery
                </Nav.Link>
              </LinkContainer>
              <Nav.Link href="https://www.bmtmicro.com/contact" active={false}>
                Contact
              </Nav.Link>
              <NavDropdown
                title="Login"
                id="nav-dropdown"
                className="main-link"
              >
                <Nav.Link
                  href="https://vendors.bmtmicro.com"
                  active={false}
                  rel="noopener"
                  className="dropdown-style"
                  style={dropdownNavStyle}
                >
                  Vendors
                </Nav.Link>
                <Nav.Link
                  href="https://affiliates.bmtmicro.com"
                  active={false}
                  rel="noopener"
                  className="dropdown-style"
                  style={dropdownNavStyle}
                >
                  Affiliates
                </Nav.Link>
                <Nav.Link
                  href="https://customers.bmtmicro.com"
                  active={false}
                  rel="noopener"
                  className="dropdown-style"
                  style={dropdownNavStyle}
                >
                  Customers
                </Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
