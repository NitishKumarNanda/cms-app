import React, { useContext } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import UserContext from '../UserComponent/UserContext';

export default function NavbarMain() {
  const { user, setUser } = useContext(UserContext);

  const HandleLogout = () => {
    try {
      localStorage.removeItem('placeMehta', '')
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{color:'white', textShadow: '2px 2px 10px #ccc'}}>Mehta Placements</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* {menus.map((ele, idx) =>
                <Nav.Link href={"/" + ele.toLowerCase()} key={idx}>{ele}</Nav.Link>
              )} */}
              <Nav.Link href="/home" >Home</Nav.Link>
              <NavDropdown title="Courses" id="basic-nav-dropdown" className="dropdown-dark">
                <NavDropdown.Item href="/courses/1" className="dropdown-item-dark">15-Day Fast-Track to Your Dream Job Course From Mobile</NavDropdown.Item>
                <NavDropdown.Item href="/courses/2" className="dropdown-item-dark">Master English Speaking In Just 30 Days Fluent Communication</NavDropdown.Item>
                <NavDropdown.Item href="/courses/3" className="dropdown-item-dark">Master Stock Market Mysteries in Just 30 Days</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/success stories" >Success Stories</Nav.Link>
              <Nav.Link href="/about us" >About us</Nav.Link>
              <Nav.Link href="/contact us" >Contact Us</Nav.Link>
            </Nav>
            <Nav>
              {
                user && <>
                  <Nav.Link href="/users" ><i className="bi bi-person-square" > {user.email}</i></Nav.Link>
                </>
              }
              <Nav.Link onClick={HandleLogout} href='/users/login'>
                {user ? <>Logout <i className="bi bi-box-arrow-right" /></> : 'Login'}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
