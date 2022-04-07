import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Error() {
  return (
    <div className="body-content">
      <Container className="info-home">
        <Row className="justify-content-center">
          <Col xl={8} lg={8} md={10} sm={10}>
            <p style={{ fontSize: '1.5rem' }}>Please check the URL because this page does not exist. If you cannot find the page you are looking for, please contact BMT Micro <a href="contact.html">here</a>.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Error;
