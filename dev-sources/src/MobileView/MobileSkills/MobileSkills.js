import { Col, Container, Row } from "react-bootstrap";
import Skill from "../../Icons/command.png";
import clogo from "../../SkillIcons/c-logo.png";
import Java from "../../SkillIcons/java.png";
import HTML from "../../SkillIcons/html.png";
import CSS from "../../SkillIcons/cascading-style-sheets.png";
import JavaScript from "../../SkillIcons/java-script.png";
import ReactLogo from "../../SkillIcons/React.png";
const MobileSkills = () => {
  return (
    <>
      <Container
        style={{
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        <Row>
          <Col
            style={{
              display: "flex",
              color: "lightgreen",
              fontSize: "1.5rem",
              fontWeight: "bolder",
            }}
          >
            <img
              src={Skill}
              alt="Skill"
              style={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                marginTop: "5px",
              }}
            />
            <p style={{ marginTop: "5px" }}>Skills</p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginTop: "25px",
            }}
            xs={4}
            md={4}
            lg={4}
          >
            <img
              src={HTML}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
          <Col
            style={{
              marginTop: "25px",
            }}
            xs={4}
            md={4}
            lg={4}
          >
            <img
              src={CSS}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
          <Col
            style={{
              marginTop: "25px",
            }}
            xs={4}
            md={4}
            lg={4}
          >
            <img
              src={JavaScript}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginTop: "25px",
            }}
            xs={4}
            md={4}
            lg={4}
          >
            <img
              src={ReactLogo}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
          <Col
            style={{
              marginTop: "25px",
            }}
            xs={4}
            md={4}
            lg={4}
          >
            <img
              src={Java}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
          <Col
            style={{
              marginTop: "25px",
            }}
            xs={4}
            md={4}
            lg={4}
          >
            <img
              src={clogo}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MobileSkills;
