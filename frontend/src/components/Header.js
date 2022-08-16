import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const Header = () => {
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Ropstam Task</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Nav className='me-auto'>
            <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header