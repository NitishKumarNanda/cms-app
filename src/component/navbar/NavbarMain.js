import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import UserContext from '../UserComponent/UserContext';

export default function NavbarMain() {
  const menus = ['Home', 'Courses', 'Success Stories', 'About us', 'Contact Us'];
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
              {menus.map((ele, idx) =>
                <Nav.Link href={"/" + ele.toLowerCase()} key={idx}>{ele}</Nav.Link>
              )}
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
