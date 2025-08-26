import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function InfoHome() {
  useEffect(() => {
    document.title = "BMT Micro Customer Service"
  })
  return (
    <div className="body-content">
      <Container className="info-home">
        <Row className="justify-content-center">
          <Col xl={12} lg={12} md={12} sm={12}>
            <h1 className="text-center info-home-title">Welcome to the BMT Micro, Inc. Customer Service site!</h1>
          </Col>
        </Row>
        <Row className="justify-content-center" style={{ marginBottom: '1.5rem' }}>
          <Col xl={8} lg={8} md={10} sm={12} xs={12}>
            <p className='body-text'>If BMT Micro appears on your debit or credit card statement, this indicates that you have purchased an item through the BMT Micro order system. We represent a large number of software suppliers on the internet and it is possible that you have not visited our site, but you have been billed by BMT Micro on behalf of one of our software suppliers. You should have received an email message at the time of purchase containing your receipt and other information pertaining to the order.</p>
          </Col>
          <Col xl={2} lg={2} className="text-center cs-image">
            <Image
              src="https://info.bmtmicro.com/images/cs-image.png"
              width={130}
            />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={10} lg={10} md={8} sm={10} xs={12}>
            <p className="body-text">We have tried to answer the most frequently asked questions about our services here, and we will continue to update this site with any new questions. Be sure to use the links above and explore our entire database of information. If you are unable to locate the information you need, please feel free to contact our Customer Service department <a href="https://www.bmitmicro.com/contact">here</a>.</p>
            
          </Col>
        </Row>
      </Container>
      <Container fluid className="customer-resources">
        <Row className="justify-content-center">
          <Col xl={2} lg={2} md={2} sm={2} xs={0} className="text-center">
            <Image
              src="https://info.bmtmicro.com/images/bmt-micro-blocks-min.png"
              className="blocks-img-1"
            />
          </Col>
          <Col xl={4} lg={6} md={8} sm={8} xs={12}>
            <h3 className="text-center">Customer Resources</h3>
            <p style={{ marginBottom: '0rem' }}>For customers wanting to view receipts, retrieve activation codes, subscription cancellation, and much more, please visit <a href="https://customers.bmtmicro.com">customers.bmtmicro.com</a>.</p>
          </Col>
          <Col xl={2} lg={2} md={2} sm={2} xs={0} className="text-center d-md-none d-sm-none d-xs-block d-xl-block d-lg-block">
            <Image
              src="https://info.bmtmicro.com/images/bmt-micro-blocks-min.png"
              width={120}
              className="blocks-img-2"
            />
          </Col>
        </Row>
      </Container>
      <Container className="about-section">
        <Row className="justify-content-center">
          <Col xl={2} lg={2} md={2} sm={2} xs={12} className="text-center">
            <Image
              src="https://info.bmtmicro.com/images/bmt-micro-magnify-min.png"
              className="about-img"
            />
          </Col>
          <Col xl={8} lg={8} md={8} sm={10} xs={12} className="align-self-center">
            <h5>What is BMT Micro?</h5>
            <p className="body-text" style={{ marginBottom: '0rem' }}>BMT Micro is a software distribution and order fulfillment service for software developers worldwide. Founded in 1992 before the Internet was a commercial medium, our business model has evolved with the times. One thing that hasn't changed, though, is our commitment to our software suppliers and customers.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default InfoHome;
