import React from "react"
import { Image, Row, Col, Container } from "react-bootstrap"
import Header from "../components/Header"
import ServiceScreen from "../screens/ServiceScreen"
const HomeScreen = () => {
  return (
    <>
      <Header />

      <Container>
        <Row id='main'>
          <Col md={4} className='my-5 py-4' id='main-text'>
            <h2>Best Care & Better Doctor</h2>
            <p>We provide best health service to our patient.</p>
          </Col>
          <Col md={8} className='main_img my-5 py-4'>
            <Image src='./images/home.jpg' alt='hospital' id='image' />
          </Col>
        </Row>
        <ServiceScreen />
      </Container>
    </>
  )
}

export default HomeScreen
