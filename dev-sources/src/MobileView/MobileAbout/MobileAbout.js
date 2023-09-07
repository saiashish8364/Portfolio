import flash from "../../Icons/flash.png";
import { Col, Container, Row } from "react-bootstrap";
const MobileAboutMe = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
              }}
            >
              <p
                style={{
                  marginTop: "5%",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "lightgreen",
                }}
              >
                <img
                  src={flash}
                  alt="Flash"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                About Me
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          marginTop: "2%",
        }}
      >
        <Container>
          <Row>
            <Col>
              <div style={{ display: "flex", color: "white" }}>
                <div>
                  <p>
                    Hello! I'm Polu Sai Ashish, an aspiring Frontend Developer
                    with a strong enthusiasm for creating user-friendly web
                    experiences and actively building my skills in frontend
                    technologies.
                    <br />
                    When I'm not coding{" "}
                    <span style={{ color: "darkgray" }}>
                      I play Desktop Games
                    </span>{" "}
                    either with friends or in solo, cook some{" "}
                    <span style={{ color: "darkgray" }}>Food</span>, or if the
                    weather's good,
                    <span style={{ color: "darkgray" }}>
                      go out with friends !
                    </span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default MobileAboutMe;
