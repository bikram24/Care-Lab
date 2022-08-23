import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Row, Col, Button, Form, Image } from "react-bootstrap"
// import { LinkContainer } from 'react-router-bootstrap'
import FormContainer from "../components/FormContainer"
import Header from "../components/Header"
// import Header from "../components/Header"
// import PatientFormDetails from '../components/PatientFormDetails'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = async e => {
    e.preventDefault()

    const loginUser = await axios.post(
      "http://localhost:5000/user/login",
      { email, password },
      {
        headers: { "Content-Type": "application/json" },
      }
    )

    // console.log(loginUser.data._id)

    if (loginUser.data.isDoctor) {
      history.push(`/doctor`)
      localStorage.setItem("data", JSON.stringify(loginUser.data))
    } else {
      if (loginUser.data.isReport) {
        history.push(`/patient/${loginUser.data._id}`)
        localStorage.setItem("data", JSON.stringify(loginUser.data))
      } else {
        history.push(`/addReport/${loginUser.data._id}`)
        localStorage.setItem("data", JSON.stringify(loginUser.data))
      }
    }
  }

  return (
    <React.Fragment>
      <Header />
      <FormContainer>
        <Row>
          <Col sm={6} id='login-box'>
            <Image src='./images/doctor.png' alt='doctor' />
          </Col>
          <Col sm={6}>
            <div className='form-heading'>
              <h1>Sign In</h1>
            </div>

            <Form onSubmit={submitHandler} className='form'>
              <Form.Group controlId='email' id='#form_info'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter Password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type='submit' variant='primary'>
                Sign In
              </Button>
            </Form>
            <Row className='py-3'>
              <Col>
                Need account ?<Link to='/register'>Register</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormContainer>
    </React.Fragment>
  )
}

export default LoginScreen
