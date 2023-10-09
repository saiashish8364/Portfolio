import profilePic from "../../ProfileImage/Ashish.jpg";
import explore from "../../Icons/adventurer.png";
import lap from "../../Icons/laptop.png";
import { Container, Row, Image, Col } from "react-bootstrap";
const MobileIntro = () => {
  const imageStyle = {
    marginTop: "25px",
    marginLeft: "0.5%%",
    width: "90px",
    height: "90px",
  };
  return (
    <>
      <Container>
        <Row>
          <div>
            <section style={{ display: "flex" }}>
              <Col xs={9} md={9} lg={9}>
                <p
                  style={{
                    marginTop: "20px",
                    fontSize: "2rem",
                    color: "lightgreen",
                  }}
                >
                  Hey There!, I'm-
                </p>

                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "bolder",
                    marginTop: "-20px",
                    color: "white",
                  }}
                >
                  Polu Sai Ashish
                </p>
              </Col>
              <Col xs={3} md={3} lg={3}>
                <Image src={profilePic} roundedCircle style={imageStyle} />
              </Col>
            </section>
            <Col xs={12} md={12} lg={12}>
              <p
                style={{
                  color: "white",
                  marginTop: "-15px",
                  
                }}
              >
                Frontend Developer
                
              </p>
              <p>
                <span style={{ color: "grey" }}>
                  Passionate developer with a Computer Science background and a
                  keen interest in compelling user interfaces.
                </span>
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "white",
                }}
              >
                <img
                  style={{
                    width: "30px",
                    height: "35px",
                  }}
                  src={explore}
                  alt="This is an explore icon"
                />
                Exploring opportunities and side projects.{" "}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "white",
                }}
              >
                <img
                  style={{
                    marginLeft: "5px",
                    width: "25px",
                    height: "25px",
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
            </Col>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  marginLeft: "0%",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "lightgreen",
                }}
              >
                Who Am I?
              </p>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <div>
              <p
                style={{
                  marginTop: "5px",
                  fontSize: "1rem",
                  color: "white",
                }}
              >
                I was born and raised in Warangal, where I grew up in the heart
                of the city surrounded by a supportive community. After
                completing my Bachelors in Computer Science from Chaitanya
                Degree College in Warangal, I pursued Master of Computer
                Applications from Nizam College in Hyderabad. My academic
                background has equipped me with a strong foundation in various
                areas of computer science and programming, and I am eager to
                apply my skills and knowledge to real-world projects in the
                industry.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MobileIntro;
