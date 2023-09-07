import profilePic from "../ProfileImage/Ashish.jpg";
import classes from "./Intro.module.css";
import explore from "../Icons/adventurer.png";
import lap from "../Icons/laptop.png";
import { Container, Row, Image, Col } from "react-bootstrap";
const Intro = () => {
  const imageStyle = {
    marginLeft: "35%",
    width: "350px",
    height: "350px",
  };

  return (
    <>
      <div style={{ height: "124px" }}></div>
      <Container fluid className={classes.picandmatter}>
        <Row>
          <Col xs={12} md={3} lg={3} xl={3} xxl={3}>
            <Image src={profilePic} roundedCircle style={imageStyle} />
          </Col>
          <Col xs={10} md={9} lg={9} xl={9} xxl={9}>
            <div className={classes.breif}>
              <p
                style={{
                  fontSize: "2.5rem",
                  color: "lightgreen",
                }}
              >
                Hey There!, I'm-
              </p>

              <p
                style={{
                  fontSize: "4rem",
                  fontWeight: "bolder",
                  marginTop: "-2%",
                }}
              >
                Polu Sai Ashish.
              </p>

              <p
                style={{
                  color: "white",
                  marginTop: "-5%",
                }}
              >
                Frontend Developer.
                <span style={{ color: "grey" }}>
                  Passionate developer with a Computer Science background and a
                  keen interest in compelling user interfaces.
                </span>
              </p>
              <p
                style={{
                  fontSize: "1.35rem",
                }}
              >
                <img
                  style={{
                    width: "45px",
                    height: "40px",
                  }}
                  src={explore}
                  alt="This is an explore icon"
                />
                Exploring opportunities and side projects.{" "}
              </p>
              <p
                style={{
                  fontSize: "1.35rem",
                }}
              >
                <img
                  style={{
                    marginLeft: "5px",
                    width: "35px",
                    height: "30px",
                  }}
                  src={lap}
                  alt="This is an explore icon"
                />
                Currently specializing in{" "}
                <span style={{ color: "lightgreen" }}>
                  Front-end Development
                </span>
                .
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={4} md={4} lg={4} xl={6} xxl={6}>
            <div
              style={{
                display: "flex",
                marginTop: "95px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  borderBottom: " 2px solid white",
                  width: "150px",
                  marginLeft: "200px",
                  color: "darkgrey",
                }}
              ></p>
              <p
                style={{
                  marginLeft: "10%",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "lightgreen",
                }}
              >
                Intro
              </p>
            </div>
          </Col>
          <Col xs={8} md={8} lg={8} xl={6} xxl={6}>
            <div>
              <p
                style={{
                  marginTop: "150px",
                  fontSize: "1.35rem",
                  lineHeight: "3rem",
                }}
              >
                I was born and raised in Warangal, where I grew up in the heart
                of the city surrounded by a supportive community. After
                completing my Bachelor in Computer Science from Chaitanya Degree
                College in Warangal, I pursued Master of Computer Applications
                from Nizam College in Hyderabad. My academic background has
                equipped me with a strong foundation in various areas of
                computer science and programming, and I am eager to apply my
                skills and knowledge to real-world projects in the industry.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Intro;
