import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ROUTES } from '../../const';


export default function Header() {
  return (
    <>
    <header>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href={ROUTES.TOP}>Ichiro Hamasaki</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {/* リンク */}

            <Nav.Link href={ROUTES.TOP}>Home</Nav.Link>
            <Nav.Link href={ROUTES.ABOUT}>About</Nav.Link>
            <Nav.Link href={ROUTES.SKILLS}>Skills</Nav.Link>
            <Nav.Link href={ROUTES.MYPRODUCTS}>MyProducts</Nav.Link>
            <Nav.Link href={ROUTES.CONTACT}>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

    </>
  );
}
