import { Col, Container, Row } from "react-bootstrap";
import Skill from "../Icons/command.png";
import clogo from "../SkillIcons/c-logo.png";
import Java from "../SkillIcons/java.png";
import HTML from "../SkillIcons/html.png";
import CSS from "../SkillIcons/cascading-style-sheets.png";
import JavaScript from "../SkillIcons/java-script.png";
import ReactLogo from "../SkillIcons/React.png";
const Skills = () => {
  return (
    <>
      <Container
        style={{
          marginTop: "50px",
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
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "25px",
            }}
          >
            <img
              src={HTML}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
            <img
              src={CSS}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
            <img
              src={JavaScript}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
            <img
              src={ReactLogo}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
            <img
              src={Java}
              alt="C-logo"
              style={{ width: "100px", height: "100px" }}
            />
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
export default Skills;
