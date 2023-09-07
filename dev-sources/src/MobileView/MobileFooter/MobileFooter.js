import { Button, Container, Row, Col } from "react-bootstrap";
import linkedin from "../../Icons/linkedin.png";
import email from "../../Icons/email.png";
import docs from "../../Icons/docs.png";

const MobileFooter = () => {
  function redirectToGmail() {
    const mailtoUrl = `mailto:polusaiashish8364@gmail.com?subject=subject`;
    window.open(mailtoUrl, "_blank");
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <p
              style={{
                fontSize: "2.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                color: "white",
              }}
            >
              Keep In Touch
            </p>
            <br />
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-40px",
                color: "white",
              }}
            >
              Currently Specializing in&nbsp;
              <span style={{ color: "lightgreen" }}>Frontend Development</span>.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100px",
              marginTop: "0px",
            }}
          >
            <p style={{ marginRight: "20px" }}>
              <a
                href="https://www.linkedin.com/in/sai-ashish-polu-4423ab16b"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "-5px",
                      marginRight: "5px",
                      borderRadius: "2px",
                    }}
                  />
                  LinkedIn
                </Button>
              </a>
            </p>
            <p style={{ marginRight: "20px" }}>
              <Button variant="secondary" onClick={redirectToGmail}>
                <img
                  src={email}
                  alt="Email"
                  style={{
                    width: "25px",
                    height: "20px",
                    marginLeft: "-5px",
                    marginRight: "5px",
                    borderRadius: "4px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                />
                Email
              </Button>
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/19EKWn9ZBHjncZKEwSgZO1qogNgW8ff7d/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary">
                  <img
                    src={docs}
                    alt="Resume"
                    style={{
                      width: "35px",
                      height: "35px",
                      marginLeft: "-7.5px",
                      marginBottom: "-5px",
                    }}
                  />
                  Resume
                </Button>
              </a>
            </p>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.85rem",
              color: "lightgrey",
              fontWeight: "lighter",
              marginTop: "50px",
            }}
          >
            Designed and Developed by Ashish.
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "0.85rem",
              marginTop: "-15px",
              color: "lightgrey",
              fontWeight: "lighter",
              marginBottom: "50px",
            }}
          >
            Built with &nbsp;
            <span style={{ color: "lightgreen" }}>React Js </span>&nbsp; &&nbsp;
            <span style={{ color: "lightgreen" }}>Bootstrap</span>. Hosted on
            Firebase.
          </p>
        </Row>
      </Container>
    </>
  );
};
export default MobileFooter;
