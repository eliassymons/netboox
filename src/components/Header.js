import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

export default function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavItem href="#home">
          <Link className="navbar-brand" to="/">
            Netboox
          </Link>
        </NavItem>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavItem href="#about">
              <Link className="nav-link" to="/about">
                About
              </Link>{" "}
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <Link className="nav-link" to="/my-list">
                My List
                <Badge bg="secondary">
                  {props.uniqueList.length > 0 && props.uniqueList.length}
                </Badge>
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
