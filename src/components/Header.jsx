import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import logo from "../assets/logo-transparent.png"

export default function Header() {
  return (
    <Navbar expand="lg" bg="white" variant="light" sticky="top" className='p-3 border-bottom'>
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} style={{maxWidth: "50px"}} />
          <span className='fw-bold ms-2'>VS Projects</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact" className='ms-3 main-btn'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
