import React from "react"
import { Link } from "react-router-dom"

import { Row, Col, Button } from "react-bootstrap"
import Header from "../components/Header"

const addReport = ({ match }) => {
  // const id = match.params.id
  console.log(match.params.id)
  return (
    <>
      <Header />
      <div className='dashboard'>
        <Row>
          <Col sm={3} md={3} id='sidebar-addReport'>
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
          <Col sm={9} md={9}>
            <Link to={`/reportForm/${match.params.id}`}>
              <Button className='btn report-btn'>Add Report</Button>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default addReport
