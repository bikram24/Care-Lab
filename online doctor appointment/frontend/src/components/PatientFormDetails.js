import React, { useState, useCallback, useEffect } from "react"
import { Row, Col, Table, Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import axios from "axios"
import Header from "./Header"
// import PatientReport from '../screens/PatientReport'

const PatientFormDetails = () => {
  const [reports, setReports] = useState([])
  const fun = useCallback(async () => {
    const report = await axios.get(`http://localhost:5000/user/getAllReport`)
    setReports(report.data)
  }, [])

  useEffect(() => {
    fun()
  }, [fun])

  return (
    <>
      <Header />
      <div className='dashboard'>
        <Row>
          <Col sm={3} md={3} id='sidebar'>
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
            <Row>
              <Table id='table-data' striped bordered>
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>First Name</th>
                    <th>Age</th>
                    <th id='td3'>Report</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report, index) => (
                    <tr key={report._id}>
                      <td>{index + 1}</td>
                      <td>{report.name}</td>
                      <td>{report.age}</td>
                      <td id='td3'>
                        <LinkContainer to={`/detail/${report._id}`}>
                          <Button>View Report</Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default PatientFormDetails
