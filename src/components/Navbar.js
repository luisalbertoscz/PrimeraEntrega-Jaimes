import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidget from './CarWidget';

const NavbarC= ({name}) =>{
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Palmeras Paraiso</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Botella</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Botella Gigante</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coco</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Manila</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sumuque</NavDropdown.Item>
              
            </NavDropdown>
            <CarWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarC;