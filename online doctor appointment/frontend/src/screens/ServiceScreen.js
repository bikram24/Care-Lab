import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"

const ServiceScreen = () => {
  return (
    <>
      <Container id='service'>
        <Row>
          <Col md={4} id='card_body'>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-calendar-alt' />
                </Card.Title>
                <Card.Text>
                  Can be available any time and update each time after the
                  checkup.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-file-medical-alt' />
                </Card.Title>
                <Card.Text>
                  Ask your doctor for access to your health records before
                  checkup to know your previous health problem.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  <i className='fas fa-user-lock' />
                </Card.Title>
                <Card.Text>
                  Log in to your account to see your records from anywhere at
                  anytime.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ServiceScreen
