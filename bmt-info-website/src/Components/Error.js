import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Error() {
  useEffect(() => {
    document.title = "BMT Micro Customer Service - Error"
  })
  return (
    <div className="body-content">
      <Container className="info-home">
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={10} sm={10}>
            <h2 style={{ color: '#efa900', letterSpacing: '.5px' }}>Error!</h2>
            <p style={{ fontSize: '1.1rem', color: '#707070', letterSpacing: '.5px' }}>Please check the URL because this page does not exist. If you cannot find the page you are looking for, please contact BMT Micro <a href="https://www.bmtmicro.com/contact">here</a>.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Error;
