import classes from "./Nav.module.css";
import { NavLink, Navbar } from "react-bootstrap";
import { Nav, Container } from "react-bootstrap";
const NavBarMenu = () => {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container fluid="md">
          <NavLink href="/">
          <Navbar.Brand>
            <h2 className={classes.name}>
              
              <p
                style={{
                  color: "grey",
                }}
              >{`{`}</p>
              <p>{`A`}</p>
              <p
                style={{
                  color: "grey",
                }}
              >{`}`}</p>
            </h2>
          </Navbar.Brand></NavLink>
          <Nav
            className="me-auto"
            style={{
              marginLeft: "50%",
              fontSize: "1.35rem",
            }}
          >
            <NavLink
              style={{
                marginRight: "30px",
              }}
              href="/"
            >
              Home
            </NavLink>
            <NavLink
              style={{
                marginRight: "30px",
              }}
              href="/Projects"
            >
              Projects
            </NavLink>
            <NavLink
              style={{
                marginRight: "30px",
              }}
              href="/ContactMe"
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBarMenu;
