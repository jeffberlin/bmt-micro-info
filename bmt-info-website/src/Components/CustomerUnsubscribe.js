import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CustomerUnsubscribe() {
  useEffect(() => {
    document.title = "BMT Micro Customer Service - Unsubscribe"
  })
  return (
    <div className="body-content">
      <Container className="page">
        <Row className="justify-content-center">
          <Col xl={10} lg={12} md={12} sm={12}>
            <h4 className="page-title">Unsubscribe</h4>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p>Request for data removal</p>
            <p className='body-text'>The email that you received from BMT Micro is a one-time mailing in direct response to a product or service you purchased from us When we sell a product, we send out a purchase payment receipt and product fulfillment information. <strong>BMT MICRO DOES NOT MAINTAIN MAILING LISTS, so there is no need to unsubscribe</strong>.</p>
            <p className='body-text'>However, should you want us to delete your customer account at <a href="https://customers.bmtmicro.com" target="_blank" rel="noreferrer">https://customers.bmtmicro.com</a>, please contact <a href="mailto:webmaster@bmtmicro.com">webmaster@bmtmicro.com</a> and request data removal as per GDPR.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CustomerUnsubscribe;