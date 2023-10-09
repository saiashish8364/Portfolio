import { Col, Container, Row } from "react-bootstrap";
import Mail from "../Icons/mail.png";
import Resume from "../Icons/resume.png";
import Location from "../Icons/location.png";
import GitHub from "../Icons/githubGreen.png";
import LinkedIn from "../Icons/linkedinGreen.png";

const ContactMe = () => {
  function redirectToGmail() {
    const mailtoUrl = `mailto:polusaiashish8364@gmail.com?subject=subject`;
    window.open(mailtoUrl, "_blank");
  }
  return (
    <>
      <div
        style={{
          marginTop: "110px",
        }}
      >
        <h1
          style={{
            marginLeft: "15%",
          }}
        >
          Contact Me?
        </h1>
        <p
          style={{
            marginTop: "2%",
            marginLeft: "15%",
            color: "lightgray",
          }}
        >
          You can click below to E-mail me or view my profiles.
        </p>

        <Container
          style={{
            marginTop: "3%",
          }}
        >
          <Row>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  color: "lightgrey",
                }}
              >
                <section>
                  <img
                    src={Location}
                    alt="Address"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                  <br />
                  <address
                    style={{
                      marginTop: "30px",
                      marginLeft: "-20px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "2rem",
                      }}
                    >
                      Location
                    </span>
                    <br />
                    <p style={{ marginLeft: "20px" }}>Hyderabad</p>
                  </address>
                </section>

                <section
                  onClick={redirectToGmail}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={Mail}
                    alt="Mail"
                    style={{
                      width: "60px",
                      height: "60px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                    onClick={redirectToGmail}
                  />
                  <br />
                  <p
                    style={{
                      marginTop: "30px",
                      marginLeft: "-50px",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "-40px",
                        fontSize: "2rem",
                      }}
                    >
                      E-Mail:
                    </span>
                    <br />
                    polusaiashish8364@gmail.com
                  </p>
                </section>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "50px",
            }}
          >
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  color: "lightgrey",
                  marginTop: "50px",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/sai-ashish-polu-4423ab16b"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "lightgrey",
                  }}
                >
                  <section>
                    <img
                      src={LinkedIn}
                      alt="LinkedIn"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <br />
                    <p
                      style={{
                        marginTop: "30px",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "-30px",
                          fontSize: "1.25rem",
                        }}
                      >
                        LinkedIn Profile
                      </span>
                    </p>
                  </section>
                </a>
                <a
                  href="https://www.snapit.tech/ashish8364/polu-sai-ashish"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "lightgrey",
                  }}
                >
                  <section>
                    <img
                      src={Resume}
                      alt="Resume"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <br />
                    <p
                      style={{
                        marginTop: "30px",
                        marginLeft: "-25px",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "20px",
                          fontSize: "1.25rem",
                        }}
                      >
                        Resume
                      </span>
                      <br />
                    </p>
                  </section>
                </a>
                <a
                  href="https://github.com/saiashish8364"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "lightgrey",
                  }}
                >
                  <section>
                    <img
                      src={GitHub}
                      alt="GitHub"
                      style={{
                        width: "60px",
                        height: "60px",
                      }}
                    />
                    <br />
                    <p
                      style={{
                        marginTop: "30px",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          marginLeft: "-25px",
                          fontSize: "1.25rem",
                        }}
                      >
                        GitHub Profile
                      </span>
                    </p>
                  </section>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
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
export default ContactMe;
