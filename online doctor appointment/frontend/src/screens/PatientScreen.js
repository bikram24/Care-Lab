import React, { useCallback, useEffect, useState } from "react"
import { Row, Col, Container, Form, Image } from "react-bootstrap"
// import { Link } from "react-router-dom"
import axios from "axios"
import Header from "../components/Header"
// import Header from "../components/Header"

const PatientScreen = ({ match }) => {
  const [report, setReport] = useState("")

  const fun = useCallback(async () => {
    const reports = await axios.get(
      `http://localhost:5000/user/getReportByPatient/${match.params.id}`
    )
    setReport(reports.data)
  }, [match.params.id])

  useEffect(() => {
    fun()
  }, [fun])

  return (
    <>
      <Header />
      <div className='dashboard'>
        <Row>
          <Col sm={6} md={3} id='sidebar'>
            <Row id='bar2'>
              <>
                <i class='fas fa-tachometer-alt'></i>
                <h3>Dashboard</h3>
              </>
            </Row>
            <Row id='bar'>
              <>
                <i className='fas fa-user' />

                <span>Patient Record</span>
              </>
            </Row>
          </Col>
          <Col sm={6} md={9}>
            <Row></Row>
            <Row>
              <Container>
                <Row className='my-4 patient-top-info'>
                  <Col xs={12} sm={5} md={3}>
                    <Image
                      src={report.file}
                      alt='patient image'
                      id='patient-img'
                    />
                  </Col>
                  <Col xs={12} sm={7} md={9}>
                    <Row id='patient-details'>
                      <h5> Personal Info:</h5>
                      <Col md={6} id='details'>
                        <p>Name :{report.name}</p>
                        <p>Age : {report.age}</p>
                        <p>Sex : {report.sex}</p>
                      </Col>
                      <Col md={6} id='details'>
                        <p>Blood group : {report.bloodGroup}</p>
                        <p>Address :{report.address}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <h2 id='title2'>Medical Info :</h2>
                  <Col id='info-1'>
                    <Form>
                      <Row id='top-row'>
                        <Col md={6}>
                          <Form.Group className='mb-3'>
                            <Form.Label>Allergies </Form.Label>
                            <Form.Control
                              size='sm'
                              as='textarea'
                              rows={3}
                              value={report.allergies}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className='mb-3'>
                            <Form.Label>Surgeries </Form.Label>
                            <Form.Control
                              size='sm'
                              as='textarea'
                              rows={3}
                              value={report.surgeries}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row id='mid-row'>
                        <Col md={6}>
                          <Form.Group className='mb-3'>
                            <Form.Label>Past Medical report </Form.Label>
                            <Form.Control
                              size='sm'
                              as='textarea'
                              rows={3}
                              value={report.pastMedicalReport}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className='mb-3'>
                            <Form.Label>Medication </Form.Label>
                            <Form.Control
                              size='sm'
                              as='textarea'
                              rows={3}
                              value={report.medication}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default PatientScreen
