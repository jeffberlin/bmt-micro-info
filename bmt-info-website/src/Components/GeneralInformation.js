import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOL5Modal from './GeneralInfoModals/AOL5Modal';
import AOL6Modal from './GeneralInfoModals/AOL6Modal';
import AOL7Modal from './GeneralInfoModals/AOL7Modal';
import AOL9Modal from './GeneralInfoModals/AOL9Modal';
import FirefoxModal from './GeneralInfoModals/FirefoxModal';
import IE4Modal from './GeneralInfoModals/IE4Modal';
import IE5Modal from './GeneralInfoModals/IE5Modal';
import IE6Modal from './GeneralInfoModals/IE6Modal';
import IEMacModal from './GeneralInfoModals/IEMacModal';
import SafariModal from './GeneralInfoModals/SafariModal';
import NS4Modal from './GeneralInfoModals/NS4Modal';
import NS6Modal from './GeneralInfoModals/NS6Modal';
import NS7Modal from './GeneralInfoModals/NS7Modal';

function GeneralInfo() {
  useEffect(() => {
    document.title = "BMT Micro Customer Service - General Info"
  })
  const [AOL5modalShow, AOL5ModalShow] = useState(false);
  const [AOL6modalShow, AOL6ModalShow] = useState(false);
  const [AOL7modalShow, AOL7ModalShow] = useState(false);
  const [AOL9modalShow, AOL9ModalShow] = useState(false);
  const [FirefoxmodalShow, FirefoxModalShow] = useState(false);
  const [IE4modalShow, IE4ModalShow] = useState(false);
  const [IE5modalShow, IE5ModalShow] = useState(false);
  const [IE6modalShow, IE6ModalShow] = useState(false);
  const [IEMacmodalShow, IEMacModalShow] = useState(false);
  const [SafarimodalShow, SafariModalShow] = useState(false);
  const [NS4modalShow, NS4ModalShow] = useState(false);
  const [NS6modalShow, NS6ModalShow] = useState(false);
  const [NS7modalShow, NS7ModalShow] = useState(false);

  return (
    <div className="body-content">
      <Container className="page">
        <Row className="justify-content-center">
          <Col xl={10} lg={12} md={12} sm={12}>
            <h4 className="page-title">General Information</h4>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">What is BMT Micro?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>BMT Micro is a software distribution and order fulfillment service for professional through part time software developers.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">Why does BMT Micro appear on my credit/debit card statement?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>This indicates that you have purchased an item through the BMT Micro order system on the internet.</p>
              <p>We represent a large number of software suppliers on the internet and it is possible that you have not visited our site, but you have been billed by BMT Micro on behalf of one of our software suppliers. You should have received an email message at the time of purchase containing your receipt and other information pertaining to the order.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">I'm having all sorts of problems. Can BMT Micro help?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Yes we can help you. If you are having trouble downloading a particular title, have questions about billing, shipping, order status and available software, we have the answers to your questions.</p>
              <p>If you are having problems regarding software features, configuration, compatibility or upgradability, then you need to contact the developer of that software.</p>
              <p>If you are having trouble finding a contact address for the developer, we can forward your inquiry to them or provide you with contact information.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">Who should I contact with general questions about a particular title?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Our customer service staff will be more than happy to assist you with general product information such as product price, delivery options and availability.</p>
              <p>Any questions regarding compatibility, specific product features and functionality should be directed to the developer.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">How do I place an order online?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Once you have reached the order form, you only need to complete all of the required fields.</p>
              <p>Make certain that the order form indicates the correct product that you wish to purchase. You should also double-check the quantity option.</p>
              <p>Please provide the most accurate information including telephone numbers so that we will be able to contact you in the event that there is a problem with your order. Your information is never shared or sold.</p>
              <p>You will notice that we recommend that you do not use any freemail accounts as your email address. These addresses have a high rate of fraud and we therefore manually process any orders placed with a freemail email address.</p>
              <p>The last section of the order form requests your payment information. Online orders are restricted to credit cards only. Be sure that the credit card being used matches the name and address information entered at the beginning of the form.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">How do I order by phone/fax/mail?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Voice Orders: 9am-5:30pm EST (-5 GMT)</p>
              <p><a href="tel:+18004144268" alt="Orders only number" title="Call us!">(800) 414-4268 (orders only)</a></p>
              <p><a href="tel:+19107929100" alt="Phone number" title="Call us!">(910) 792-9100</a></p>
              <p>BMT Micro</p>
              <p>PO Box 15016</p>
              <p>Wilmington, NC 28408</p>
              <p>Fax: <span style={{ color: "#efa900" }}>910-792-1889</span></p>
              <p>You can find our offline order form <a href="https://www.bmtmicro.com/support/misc_forms/Offline_OrderForm.html" target="_blank" title="Support form" rel="noreferrer">here</a>.</p>
              <p style={{ marginBottom: '.5rem' }}>We accept many methods of payment including:</p>
              <ul>
                <li style={{ marginBottom: '.5rem' }}>Money orders, cashiers checks, and bank drafts are welcome. All software purchased using these methods will ship as soon as payment is received. Please remember that all payments should be in U.S. dollars unless other arrangements are made in advance.</li>
                <li style={{ marginBottom: '.5rem' }}>Personal checks are welcome, but please allow up to two weeks for your check to clear the bank. All checks must be drawn on US banks and are subject to approval.</li>
                <li style={{ marginBottom: '.5rem' }}>Purchase Orders</li>
                <li>Wire Transfers</li>
              </ul>
              <p>Make all checks payable to BMT MICRO and write FOR DEPOSIT ONLY on the reverse side of the check for your protection. In the lower-left edge of your check, please write in the name of the program you are registering. Please be sure US Checks are in US Dollars. Banks cannot clear checks in currency other than their own. Handwriting US Dollars on a foreign check will void the value of the check and we will have to return the check for replacement.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">I just placed an order, what happens next?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>On behalf of all of our software publishers, we would like to first thank you for shopping with BMT Micro!</p>
              <p>Once you have placed an order online, you should receive either an order receipt or order confirmation within minutes via email. Keep in mind that a number of factors including the use of freemail accounts and heavy network traffic can delay this message for up to 48 hours. If you have not received any confirmation and 48 hours have passed, please contact our customer service team.</p>
              <p>If the product is deliverable by email you should also receive the product registration information within minutes. The same exceptions apply as above in addition to the fact that a large number of products are delivered by the developers themselves. In the case of products delivered by the developer, you should contact them at the email address included in your order confirmation for information on when the product will be delivered.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">How do I enable/disable JavaScript in my browser?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>BMT Micro uses JavaScript (also known as JScript) in its order forms to help ensure your order is processed quickly and accurately. If you wish to make a purchase online through BMT Micro, you will need to follow the instructions for your browser type and version below.</p>
              <p>This process depends on the type and version of your browser. The instructions below are for several common browsers.</p>
              <p style={{ marginBottom: '.2rem'}}><strong>Firefox 1.0</strong></p>
              <ul>
                <li>Select 'Options...' from the 'Tools' menu</li>
                <li>Select 'Web Options' on the left (globe icon)</li>
                <li>Select 'Enable Javascript'</li>
                <li>Close all open Firefox windows and relaunch Firefox</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><strong>Navigator 3.x</strong></p>
              <ul>
                <li>Go to "Options -> Network Preferences..." from the main menu</li>
                <li>Change to the "Languages" tab</li>
                <li>To enable: make sure "Enable JavaScript" check box is checked</li>
                <li>To disable: make sure "Enable JavaScript" check box is unchecked</li>
                <li>Restart the browser</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><strong>Communicator 4.x</strong></p>
              <ul>
                <li>Go to "Edit -> Preferences..." from the main menu</li>
                <li>Select "Advanced" panel</li>
                <li>To enable: make sure "Enable JavaScript" check box is checked.</li>
                <li>To disable: make sure "Enable JavaScript" check box is unchecked.</li>
                <li>Restart the browser</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><strong>Explorer 3.x</strong></p>
              <ul>
                <li>Go to "View -> Options..." from the main menu</li>
                <li>Change to the "Security" tab</li>
                <li>To enable: make sure "Run ActiveX scripts" check box is checked</li>
                <li>To disable: make sure "Run ActiveX scripts" check box is unchecked</li>
                <li>Restart the browser</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><strong>Explorer 4.x, 5.x, 6.x</strong></p>
              <ul>
                <li>Go to "View -> Internet Options..." from the main menu</li>
                <li>Change to the "Security" tab</li>
                <li>Select "Custom" and click on the "Settings..." button</li>
                <li>To enable: make sure "Enable" is selected under "Active scripting"</li>
                <li>To disable: make sure "Disable" is selected under "Active scripting"</li>
                <li>Restart the browser</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><strong>Opera 7.x</strong></p>
              <ul>
                <li>Go to "File -> Quick Preferences" from the main window</li>
                <li>To Enable JavaScript: On the fly-out menu, click on "Enable JavaScript"</li>
                <li>To Disable JavaScript: Repeat steps above.</li>
                <li>Reload the page.</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><strong>AOL 3.0</strong></p>
              <ul>
                <li>Click Prefs.</li>
                <li>Click Security.</li>
                <li>Check Enable Java Programs, if the box is blank, single click on it.</li>
                <li>Click OK .</li>
                <li>Click the browser's back button. Once back, click reload.</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><strong>AOL 4.0 and 5.0</strong></p>
              <ul style={{ marginBottom: '.5rem'}}>
                <li>Click My AOL.</li>
                <li>Click Preferences.</li>
                <li>Click WWW.</li>
                <li>Click Custom.</li>
                <li>Click Settings.</li>
                <li>Scroll down to locate Scripting.</li>
                <li>Click Enable for Active Scripting.</li>
                <li>Click OK, then click the Reload button.</li>
                <li>Reload the page.</li>
              </ul>
              <p style={{ marginBottom: '.2rem'}}><u><em>Note to AOL 4.0 & 5.0 users:</em></u></p>
              <p style={{ fontSize: '.9rem', marginBottom: '.2rem'}}>When using the use AOL browser, you may get a Javascript error but, when using an external browser (i.e., Netscape or Internet Explorer) this does not occur. AOL uses compressed graphics by Default. This doesn't allow Java to work while browsing inside AOL. (Additionally, this makes photos you view on web pages look less than optimal.) Do the following:</p>
              <ul style={{ fontSize: '.9rem', marginBottom: '.2rem'}}>
                <li>Click My AOL.</li>
                <li>Click Preferences.</li>
                <li>Click the WWW icon.</li>
                <li>Click Web Graphics tab.</li>
                <li>Uncheck the box next to Use Compressed Graphics.</li>
                <li>Click OK Restart the computer.</li>
                <li><em>Note that there are both 16-bit and 32-bit versions of AOL 4.0. Only the 32-bit version has full Java capabilites.</em></li>
              </ul>
              <p style={{ fontSize: '.9rem' }}>*Simply reloading the page, rather than restarting the browser, maybe sufficient under some browser versions.</p>
            </div>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <p className="question">How do I refresh my browser cache?</p>
          </Col>
          <Col xl={10} lg={12} md={12} sm={12}>
            <div className="answer">
              <p>Click the button below to see instructions on how to clear the cache for your browser.</p>
              <ul className="cache-section" style={{ listStyle: 'none' }}>
                <li><button type="button" className="cache-btn" onClick={() => AOL5ModalShow(true)}>America Online 5.0 (32 bit)</button></li>
                <li><button type="button" className="cache-btn" onClick={() => AOL6ModalShow(true)}>America Online 6.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => AOL7ModalShow(true)}>America Online 7.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => AOL9ModalShow(true)}>America Online 9.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => FirefoxModalShow(true)}>Mozilla Firefox 1.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => IE4ModalShow(true)}>Internet Explorer 4.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => IE5ModalShow(true)}>Internet Explorer 5.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => IE6ModalShow(true)}>Internet Explorer 6.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => IEMacModalShow(true)}>Internet Explorer 4.0 - 5.0 (MacOS)</button></li>
                <li><button type="button" className="cache-btn" onClick={() => SafariModalShow(true)}>Macintosh OS 10.2 Safari 1.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => NS4ModalShow(true)}>Communicator / Navigator 4.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => NS6ModalShow(true)}>Communicator / Navigator 6.0</button></li>
                <li><button type="button" className="cache-btn" onClick={() => NS7ModalShow(true)}>Communicator / Navigator 7.0</button></li>
              </ul>
            </div>
            <AOL5Modal
              show={AOL5modalShow}
              onHide={() => AOL5ModalShow(false)}
            />
            <AOL6Modal
              show={AOL6modalShow}
              onHide={() => AOL6ModalShow(false)}
            />
            <AOL7Modal
              show={AOL7modalShow}
              onHide={() => AOL7ModalShow(false)}
            />
            <AOL9Modal
              show={AOL9modalShow}
              onHide={() => AOL9ModalShow(false)}
            />
            <FirefoxModal
              show={FirefoxmodalShow}
              onHide={() => FirefoxModalShow(false)}
            />
            <IE4Modal
              show={IE4modalShow}
              onHide={() => IE4ModalShow(false)}
            />
            <IE5Modal
              show={IE5modalShow}
              onHide={() => IE5ModalShow(false)}
            />
            <IE6Modal
              show={IE6modalShow}
              onHide={() => IE6ModalShow(false)}
            />
            <IEMacModal
              show={IEMacmodalShow}
              onHide={() => IEMacModalShow(false)}
            />
            <SafariModal
              show={SafarimodalShow}
              onHide={() => SafariModalShow(false)}
            />
            <NS4Modal
              show={NS4modalShow}
              onHide={() => NS4ModalShow(false)}
            />
            <NS6Modal
              show={NS6modalShow}
              onHide={() => NS6ModalShow(false)}
            />
            <NS7Modal
              show={NS7modalShow}
              onHide={() => NS7ModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default GeneralInfo;
