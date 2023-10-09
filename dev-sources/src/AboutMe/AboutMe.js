import classes from "./AboutMe.module.css";
import AboutCard from "../Icons/AboutMeCard.png";
import flash from "../Icons/flash.png";
import { Col, Container, Row } from "react-bootstrap";
const AboutMe = () => {
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
                  marginLeft: "60%",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "0%",
                  color: "lightgreen",
                }}
              >
                <img
                  src={flash}
                  alt="Flash"
                  style={{
                    width: "25px",
                    height: "25px",
                  }}
                />
                About Me
              </p>
              <p
                style={{
                  borderBottom: " 2px solid white",
                  width: "200px",
                  marginLeft: "8%",
                }}
              ></p>
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
            <Col xxl={8} lg={8}>
              <div style={{ display: "flex" }}>
                <div className={classes.aboutme}>
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
            <Col xxl={4} lg={4}>
              <div style={{ marginLeft: "100px" }}>
                <img
                  className={classes.aboutcard}
                  src={AboutCard}
                  alt="About Card"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default AboutMe;
