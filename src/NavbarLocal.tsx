import { Navbar, Container, Nav } from "react-bootstrap"

export default function NavbarLocal(props){
  return <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">{props.link1}</Nav.Link>
          <Nav.Link href="#features">{props.link2}</Nav.Link>
          <Nav.Link href="#pricing">{props.link3}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>;
}