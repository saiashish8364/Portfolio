import { Container, Nav, NavLink, Navbar } from "react-bootstrap";

const MobileNavMenu = () => {
  return (
    <>
      <Navbar
        bg="black"
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="bg-body-tertiary"
      >
        <Container
          style={{
            marginTop: "20px",
            marginBottom: "-10px",
            width: "100%",
          }}
        >
          <Navbar.Brand href="/">
            <h2
              style={{
                display: "flex",
                marginLeft: "7.5%",
                fontSize: "2rem",
              }}
            >
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
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{
              marginTop: "-20px",
            }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/MobileProjects">Projects</NavLink>
              <NavLink href="/MobileContactMe">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MobileNavMenu;
