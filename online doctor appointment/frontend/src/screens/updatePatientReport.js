import React, { useCallback, useEffect, useState } from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
// import { Link } from "react-router-dom"

import axios from "axios"
import Header from "../components/Header"
const ReportForm = ({ history, match }) => {
  const [report, setReport] = useState("")

  const fun = useCallback(async () => {
    const reports = await axios.get(
      `http://localhost:5000/user/getReport/${match.params.id}`
    )
    setReport(reports.data)
  }, [match.params.id])

  useEffect(() => {
    fun()
  }, [fun])

  const [name, setName] = useState(report.name)
  const [age, setAge] = useState(report.age)
  const [sex, setSex] = useState("")
  const [bloodGroup, setBloodGroup] = useState("")
  const [address, setAddress] = useState("")
  const [allergies, setAllergies] = useState("")
  const [surgeries, setSurgeries] = useState("")
  const [pastMedicalReport, setPastMedicalReport] = useState("")
  const [medication, setMedication] = useState("")

  useEffect(() => {
    setName(report.name)
    setAge(report.age)
    setSex(report.sex)
    setBloodGroup(report.bloodGroup)
    setAddress(report.address)
    setAllergies(report.allergies)
    setSurgeries(report.surgeries)
    setPastMedicalReport(report.pastMedicalReport)
    setMedication(report.medication)
  }, [report])

  const id = match.params.id

  const submitHandler = async e => {
    e.preventDefault()
    const data = await axios.put(
      `http://localhost:5000/user/updateReport/${id}`,
      {
        name,
        age,
        sex,
        bloodGroup,
        address,
        allergies,
        surgeries,
        pastMedicalReport,
        medication,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    console.log(data.data)
    history.push(`/detail/${data.data.id}`)
  }

  return (
    <>
      <Header />
      <div className='dashboard'>
        <Row>
          <Col sm={3} md={3} id='updateSidebar'>
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
            <div className='col-md-8 form-body'>
              <form onSubmit={submitHandler} className='col-md-8'>
                <Form.Group className='mb-3' controlId='Name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Form.Group id='info-form-lft' as={Col} controlId='Age'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type='number'
                      value={age}
                      onChange={e => setAge(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group id='info-form-rt' as={Col} controlId='Sex'>
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      type='text'
                      value={sex}
                      onChange={e => setSex(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    id='info-form-lft'
                    as={Col}
                    controlId='BloodGroup'>
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                      type='text'
                      value={bloodGroup}
                      onChange={e => setBloodGroup(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group id='info-form-rt' as={Col} controlId='Address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type='text'
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Form.Group className='mb-3' controlId='Allergies'>
                  <Form.Label>Allergies</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    value={allergies}
                    onChange={e => setAllergies(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='Surgeries'>
                  <Form.Label>Surgeries</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    value={surgeries}
                    onChange={e => setSurgeries(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='PastMedicalRecord'>
                  <Form.Label>Past Medical Record</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    value={pastMedicalReport}
                    onChange={e => setPastMedicalReport(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className='mb-3' controlId='Medication'>
                  <Form.Label>Medication</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows={4}
                    value={medication}
                    onChange={e => setMedication(e.target.value)}
                  />
                </Form.Group>

                <Button type='submit' className='btn btn-success my-3'>
                  Update
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ReportForm
