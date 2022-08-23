import React, { useState, useCallback, useEffect } from "react"
import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useHistory } from "react-router-dom"

const Header = ({ match }) => {
  const user = JSON.parse(localStorage.getItem("data"))

  const [detail, setDetail] = useState("")

  const dashBoard = () => {
    console.log(user._id)
    if (user.isDoctor) {
      history.push("/doctor")
    } else {
      history.push(`/patient/${user._id}`)
    }
  }

  const history = useHistory()
  const logOut = () => {
    localStorage.clear()
    setDetail({})
    history.push("/login")
  }
  const func = useCallback(() => {
    const info = JSON.parse(localStorage.getItem("data"))
    setDetail(info)
  }, [])

  useEffect(() => {
    func()
  }, [func])

  return (
    <header>
      <Navbar variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image src='./images/care.png' alt='logo' id='logo' />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav id='header_link'>
              <Nav className='mx-auto'>
                <Nav.Link href='/'>Home</Nav.Link>

                {user ? (
                  <NavDropdown title={detail && detail.name}>
                    <NavDropdown.Item onClick={dashBoard}>
                      Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link href='/login'>login</Nav.Link>
                )}
              </Nav>

              <span id='pill' className='badge rounded-pill '>
                <i className='fas fa-phone-alt' id='font' /> Contact us
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
