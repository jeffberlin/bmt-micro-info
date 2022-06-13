import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DownloadingDelivery() {
  useEffect(() => {
    document.title = "BMT Micro Customer Service - Downloading/Delivery"
  })
  return (
    <div className="body-content">
      <Container className="page">
        <Row className="justify-content-center">
          <Col xl={10} lg={12} md={12} sm={12}>
            <h4 className="page-title">Downloading & Delivery</h4>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">When will I receive my product?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>If you purchased online with a credit card you will receive an order receipt and product information email immediately after the purchase has been approved.</p>
              <p>If your product is deliverable by BMT Micro, your product notification email will include download instructions and/or a registration key.</p>
              <p>If the product is delivered by the developer, your product notification email will include the developer's contact information and a message stating the item will be delivered by the developer.</p>
              <p>If you purchased an item that needs to be shipped and you live in the US, please allow 3-4 weeks for delivery. If you are outside the US, please allow 4-6 weeks.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">I selected the BMT Order on CD, but still got the download information. When will I get my CD?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Selecting BMT Order on CD does not change the delivery method of the product, it adds an additional delivery method. For this reason you will receive both the regular download instructions and a CD by postal mail. Please allow 3-4 weeks for delivery within the US and 4-6 weeks for delivery outside the US.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">I purchased a product that is downloadable but the download link in my email does not work. Why not?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p style={{ marginBottom: '.5rem' }}>The download instructions include a download link similar to this:</p>
              <p style={{ marginLeft: '20px' }}>http://download.bmtmicro.com/11111111/9999999999/</p>
              <p>If this link is wrapped when received in your email, it may not be clickable. Please copy and paste the link into a text editor to ensure it is all in one line. Then insert the link into the address bar of your browser.</p>
              <p style={{ marginBottom: '.5rem' }}>This link redirects to our secure server for downloading. This non-secure download link was created for easier downloading from services with high default security settings like AOL. As a security feature, our secure download links will automatically expire if accessed from two different regions. Sometimes when not downloading from a static IP, the redirect causes the password to expire in error. If this happens <a href="mailto:webmaster@bmtmicro.com">contact us</a> to reset your download password and try your download again from the following secure download page:</p>
              <p style={{ marginLeft: '20px' }}>https://secure.bmtmicro.com/RIP/download.html</p>
              <p>You will need to enter the Product ID and Password in the requested fields.</p>
              <p style={{ marginBottom: '.5rem' }}>If you are using AOL and are still having trouble accessing BMT Inc's secure server, follow these simple instructions:</p>
              <ul style={{ listStyleType: 'decimal', marginBottom: '0' }}>
                <li>Open your AOL browser.</li>
                <li>Click on <strong>Settings</strong> in the tool bar.</li>
                <li>Click On <strong>Preferences</strong>.</li>
                <li>Click On <strong>Internet Properties</strong>.</li>
                <li>Click On <strong>Customize Settings</strong>.</li>
                <li>Adjust the setting to either <strong>Medium Low</strong> or <strong>Low</strong>. *</li>
                <span style={{ fontSize: '.9rem' }}>*Try <strong>Medium Low</strong> first. If you still get a page not found or other browser error try going to the <strong>Low</strong> setting. That will do it for sure. Once you are satisfied that the download is complete, you can go back and re-set your security settings following the same path as above.</span>
              </ul>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">Shipping</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>The following prices for First Class Mail and various express courier services are rough guidelines and are always superceded by the shipping price for an individual product as listed on this site. Multiple product orders that require shipping may have shipping prices higher or lower than if the individual shipping prices are simply added up.</p>
              <p style={{ marginBottom: '.2rem' }}><strong>Electronic Delivery</strong></p>
              <p>Electronic delivery of live code, unlock codes, and activation numbers is done at no charge. We require that the exact billing address of the credit card be given during the order process in order to send products via email. We reserve the right to refuse email delivery to an order we can not absolutely verify as being legitimate due to the potential of credit card fraud. If the product is sent as a file attachment, our standard policy is to use MIME encoding. Optionally, some products are available via FTP from our FTP site or might be available via a password protected web page.</p>
              <p style={{ marginBottom: '.2rem' }}><strong>U.S. Postal Service</strong></p>
              <p>Orders are shipped by First Class U.S. Mail anywhere in the world free of charge unless otherwise noted in the order form of the program you are purchasing. Some products are not available for USPS delivery and must be sent by FedEx or Airborne for tracking purposes.</p>
              <ul style={{ listStyleType: 'none', marginBottom: '0' }}>
                <li>Priority Mail is $6 USD</li>
                <li>Global Priority (where available) is $15 USD</li>
                <li>Overnight (Airborne) is $19.00 (add $10 for HI and AK)</li>
                <li>Overnight (Fedex) is $20.00</li>
                <li>International Fedex is $45.00*</li>
                <li>Internation Express thru the USPS is $30 USD*</li>
                <li>First class mail is $3 USD (may vary according to weight)</li>
                <li>*Prices may be higher for certain destinations, please contact us for exact pricing.</li>
              </ul>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">Shipping</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>To save different files to your computer, please click <a href="https://www.wikihow.com/Save-a-File" target="_blank" rel="noreferrer">here</a> for instructions.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DownloadingDelivery;
