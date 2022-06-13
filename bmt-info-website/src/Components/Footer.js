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
          <Col xl={10} className="social">
            <a href="https://www.facebook.com/bmt.micro" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/company/bmt-micro-wilmington-nc-usa" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
            <a href="https://twitter.com/BMTMicro" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i></a>
            <a href="https://www.instagram.com/bmtmicro/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://www.pinterest.com/bmtmicro/" target="_blank" rel="noreferrer"><i className="bi bi-pinterest"></i></a>
          </Col>
          <Col xl={10}>
            <p>&copy;&nbsp;BMT Micro, Inc. 1992 - {getYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
