import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function PaymentsRefunds() {
  return (
    <div className="body-content">
      <Container className="page">
        <Row className="justify-content-center">
          <Col xl={10} lg={12} md={12} sm={12}>
            <h4 className="page-title">Payments & Refunds</h4>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">What payment options are available from BMT Micro?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p style={{ marginBottom: '.5rem' }}>For your convenience, BMT Micro accepts the following methods of payment:</p>
              <ul>
                <li>Credit Cards</li>
                <li>Money Orders / Cashiers Checks / Bank Drafts *
                  <br />
                  <span style={{ fontSize: '.9rem' }}>*All software purchased using these methods will ship as soon as payment is received. Please remember that all payments should be in U.S. dollars unless arrangements are made in advance.</span>
                </li>
                <li>Personal Checks *
                  <br />
                  <span style={{ fontSize: '.9rem' }}>*Please allow up to two weeks for your check to clear the bank. All checks must be drawn on US banks and are subject to approval.</span>
                </li>
                <li>Cash</li>
                <li>PayPal</li>
                <li>Amazon Payments</li>
                <li>paysafecard</li>
                <li>VISA/MC Debit Cards from USA banks</li>
                <li>Maestro/Solo Debit Cards from UK banks</li>
                <li>Instant Bank Transfer in EUR</li>
                <li>BitPay (Bitcoin BTC & BCH; Ether ETH)</li>
                <li>Gift Cards (Obucks, Dollar General, CVS, and Circle K)</li>
                <li>Purchase Orders</li>
                <li>Wire Transfers</li>
              </ul>
              <p>Make all checks payable to BMT MICRO and write FOR DEPOSIT ONLY on the reverse side of the check for your protection. In the lower-left edge of your check, please write in the name of the program you are registering. Please be sure US Checks are in US Dollars. Banks cannot clear checks in currency other than their own. Handwriting US Dollars on a foreign check will void the value of the check and we will have to return the check for replacement.</p>
              <p>We accept most major credit cards. For your order to ship without delay, you must give the billing address and ZIP code that your credit card statement is mailed to. We will not ship to a different address unless we have a faxed signature and can verify the "Ship to" address by phone. We reserve the right to refuse to ship to a different address than the credit card statement mailing address.</p>
              <p style={{ marginBottom: '.5rem' }}>We accept the following credit cards:</p>
              <ul>
                <li>American Express</li>
                <li>Carte Blanche</li>
                <li>Diner's Club</li>
                <li>Discover</li>
                <li>Eurocard</li>
                <li>JCB</li>
                <li>MasterCard</li>
                <li>Novus (All variations)</li>
                <li>Optima</li>
                <li>Visa</li>
                <li>Switch/Solo</li>
                <li>Maestro (not Maestro Eurocard)</li>
              </ul>
              <hr />
              <p style={{ marginBottom: '.5rem' }}><strong>Cash</strong></p>
              <p>We do not recommend sending cash or currency in the mail. If you do choose this method, however, we will be responsible only for delivery if the mail containing your registration and cash require a signature upon receipt of delivery by a BMT Micro employee.</p>
              <p>We accept cash payments in USD, Euro, Canadian, or British currency in any amount. Please make sure that the cash payment also covers any and all currency exchange rate variations (<a href="http://www.xe.com/ucc/" target="_blank" rel="noreferrer">http://www.xe.com/ucc/</a>).</p>
              <p style={{ marginBottom: '.2rem' }}><em>Special Information for our German Customers</em></p>
              <p>Any program we distribute can also be purchased by depositing the registration fee into our account with Commerzbank. Please fill out our <a href="https://www.bmtmicro.com/support/misc_forms/Offline_OrderForm.html" target="_blank" title="Support form" rel="noreferrer">off-line order form</a> and mail or fax to us before depositing funds into account.</p>
              <ul style={{ listStyleType: 'none' }}>
                <li>Commerzbank, Frankfurt am Main</li>
                <li>Empfänger: BMT Micro, Inc.</li>
                <li>Konto-Nummer: 582344800</li>
                <li>Bankleitzahl: 500 400 00</li>
                <li>BIC/Swift Code: COBADEFFXXX</li>
                <li>IBAN: DE21 5004 0000 0582 3448 00</li>
              </ul>
              <p>When purchasing a product via transfer into our Commerzbank account, it is imperative that you submit an <a href="https://www.bmtmicro.com/support/misc_forms/Offline_OrderForm.html" target="_blank" rel="noreferrer">order form</a> for the product you are purchasing. In the form's credit card field, type COMMERZBANK. We will enter the order into our system, and as soon as your transfer arrives in our account, we will fill the order. Remember, without an order form on file, we have no way of knowing who you are or what you purchased.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">Does BMT Micro accept Purchase Orders?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p style={{ marginBottom: '.5rem' }}>Yes we do, but with the following provisions:</p>
              <ul>
                <li>We require an actual Purchase Order Tracking Number, complete billing information, to include a contact name and a direct telephone number and email address(if available)</li>
                <li>We require complete shipping information. A contact name, physical street address, state/province and postal code</li>
                <li>All media, CDs, Floppy Disks, etc. is billed at an additional cost, when software titles are to be provided in physical form</li>
                <li>Terms are NET 30</li>
                <li>There is a minimum charge of US$250.00 for all P.O. Orders</li>
                <li>Payment in Euro is available to the following account with Commerzbank:</li>
                <ul style={{ listStyleType: 'none' }}>
                  <li>Commerzbank, Frankfurt am Main</li>
                  <li>Empfanger: BMT Micro, Inc.</li>
                  <li>Konto-Nummer: 582344800</li>
                  <li>Bankleitzahl:500 400 00</li>
                </ul>
              </ul>
              <p><strong>NOTE:</strong> You are required to use the offline order form for this and must notate: "Payment by Commerzbank". Click <a href="https://www.bmtmicro.com/support/misc_forms/Offline_OrderForm.html" target="_blank" rel="noreferrer">here</a> to go to the offline order form.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">I received a "Credit Card Denied Error" or "Data Entry Error" when ordering. What does this mean?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Check to make sure the credit card number has been input correctly, as well as the First Name, Last Name and Expiration Date and CVV Code. If the information is correct, and you still receive this error, then you need to contact your credit card company or banking institution to find out why you were denied.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">My credit card bill shows I was "double billed" for the software I purchased. How does this happen and can I get a credit?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Sometimes users 'double-click' the SUBMIT button when the order form is filled out. This can be an unconscious act that results in double billing. Be careful to click the submit button only once to avoid this.</p>
              <p>If you think you were double-billed, we will gladly refund the duplicate billing. Simply contact us by telephone at <a href="tel:+18004144268">1-800-414-4268</a> or email us at <a href="mailto:orders@bmtmicro.com">orders@bmtmicro.com</a>.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">I was told my credit card would be credited. Why hasn't it happened yet?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>The credit process is not instataneous. BMT Micro submits credits wihtin 24 hours of their request. However, it is up to the card holder's bank as to the time frame for the credit visibility.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">What is BMT Micro's refund policy?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>The majority of the software we sell is distributed on a try-before-you-buy basis which eliminates virtually all situations where a refund is requested due to the fact that the opportunity to thoroughly evaluate a product is made before the product is purchased. We strongly encourage you to try the software you are purchasing before you buy it. If you purchase a product you have tried and still have discovered problems, please contact the developer or technical support first. In most cases, a solution is available and our experience shows that software developers are eager to help you solve any problems you might have. In the unlikely event you purchase a product you have tried prior to purchasing, and have been in contact with the developer of the software to attempt a resolution, we do offer a 30 day refund policy. The 30 day period begins from the date of the purchase and runs 30 consecutive days, including weekends and holidays.</p>
              <p>We offer the same refund policy on software that is not available on a try-before-you-buy basis, however we still ask that you contact the software developer with any issues prior to requesting a refund.</p>
              <p>So to recap: After purchasing, if you have any problems you should always first attempt to resolve them with the developer. If within 30 days of purchase you are not able to solve any post-sale issues, contact us and we will gladly assist you.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PaymentsRefunds;
