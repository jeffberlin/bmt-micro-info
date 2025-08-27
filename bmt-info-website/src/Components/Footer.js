import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  const getYear = () => {
		return new Date().getFullYear()
	}

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="justify-content-center text-center">
          <Col xl={6}  lg={6} md={6} sm={6} xs={12} className="social">
            <a href="https://www.facebook.com/bmt.micro" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square facebook"></i></a>
            <a href="https://x.com/BMTMicro" target="_blank" rel="noreferrer"><i className="fab fa-brands fa-square-x-twitter x"></i></a>
            <a href="https://www.instagram.com/bmtmicro/" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square instagram"></i></a>
            <a href="https://www.linkedin.com/company/bmt-micro-wilmington-nc-usa" target="_blank" rel="noreferrer"><i className="fab fa-linkedin linkedin"></i></a>
            <a href="https://bsky.app/profile/bmtmicro.bsky.social" target="_blank" rel="noreferrer"><i className="fab fa-brands fa-square-bluesky bluesky"></i></a>
          </Col>
          <Col xl={6} lg={6} md={6} sm={6} xs={12}>
            <p>&copy;&nbsp;BMT Micro, Inc. 1992 - {getYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
