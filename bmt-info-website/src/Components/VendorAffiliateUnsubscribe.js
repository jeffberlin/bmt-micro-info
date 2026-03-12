import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VenAffUnsubscribe() {
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
            <p>Help me configure notifications for my seller account</p>
            <p className='body-text'>The email that you received from BMT Micro is a one-time mailing in direct response to a product or service you sold via us. When we sell a product, we send out various emails to the supplier. <strong>BMT MICRO DOES NOT MAINTAIN MAILING LISTS, so there is no need to unsubscribe</strong>.</p>
            <p className='body-text'>If you feel the emails you are receiving are not relevant or you just do not want to receive them, then please log in to your vendor or affiliate area and configure your notifications accordingly. You may also contact <a href="mailto:vendors@bmtmicro.com">vendors@bmtmicro.com</a> for help with configuring your vendor or affiliate account.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VenAffUnsubscribe;