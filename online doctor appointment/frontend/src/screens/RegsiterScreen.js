import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Button, Form, Image } from "react-bootstrap"
import Message from "../components/Message"
// import Loader from '../components/Loader.js'
import FormContainer from "../components/FormContainer"
import axios from "axios"
import Header from "../components/Header"

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [messages, setMessages] = useState("")

  const submitHandler = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessages("Password doesnt match")
    } else {
      await axios.post(
        "http://localhost:5000/user/register",
        { name, email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      history.push("/")
    }
  }

  return (
    <>
      <Header />

      <FormContainer>
        <Row>
          <Col sm={6} id='register-box'>
            <Image src='./images/signup.png' alt='doctor' />
          </Col>
          <Col sm={6}>
            <div className='form-heading'>
              <h1>Sign Up</h1>
            </div>

            {messages && <Message variant='danger'>{messages}</Message>}

            <Form onSubmit={submitHandler} id='register_form'>
              <Form.Group controlId='name'>
                <Form.Label>Enter Name</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter you name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='enter email'
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
              <Form.Group controlId='confirmPassword'>
                <Form.Label>Confrim Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter Password'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
              <Button type='submit' variant='primary'>
                Register
              </Button>
            </Form>
            <Row className='py-3'>
              <Col>
                Have an account ?<Link to='/login'>Log In</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </FormContainer>
    </>
  )
}

export default RegisterScreen
