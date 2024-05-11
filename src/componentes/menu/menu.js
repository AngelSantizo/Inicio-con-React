import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//tambien importamos su .scss
import './menu.scss';

function Menu() {
  return (
    <Navbar expand="lg" className="NavBar">
      <Container>
      <Navbar.Brand className='MenuBrand'>ToDo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='HomeText'>Tasks</Nav.Link>
            <Nav.Link href="#link" className='LinkText'>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;