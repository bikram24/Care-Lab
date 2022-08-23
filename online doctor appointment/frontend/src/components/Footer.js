import React from "react"
import { Row, Col, Image, Container } from "react-bootstrap"

const Footer = () => {
  return (
    <footer id='foot'>
      <Container>
        <Row id='footer_sec'>
          <Col id='footer_logo'>
            <Image src='./images/logo.png' alt='logo' style={{ height: 100 }} />
            <span id='brand_name'>online doctor appointment</span>
          </Col>
          <Col id='footer_info'>
            <h4>Contact Info :</h4>
            <span>
              <i className='fas fa-map-marker-alt' />
              <p>Butwal, Nepal</p>
            </span>
            <span>
              <i className='fas fa-phone-alt' />
              <p>9817496243</p>
            </span>
            <span>
              <i className='fas fa-envelope' />
              <p>bikram.bhattari998@gmail.com</p>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
