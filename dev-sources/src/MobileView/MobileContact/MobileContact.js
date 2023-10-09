import { Col, Container, Row } from "react-bootstrap";
import Mail from "../../Icons/mail.png";
import Resume from "../../Icons/resume.png";
import Location from "../../Icons/location.png";
import GitHub from "../../Icons/githubGreen.png";
import LinkedIn from "../../Icons/linkedinGreen.png";

const MobileContactMe = () => {
  function redirectToGmail() {
    const mailtoUrl = `mailto:polusaiashish8364@gmail.com?subject=subject`;
    window.open(mailtoUrl, "_blank");
  }
  return (
    <>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "2%",
            color: "white",
          }}
        >
          Contact Me?
        </h1>
        <p
          style={{
            margin: "6px",
            color: "lightgray",
          }}
        >
          You can click below to E-mail me or view my profiles.
        </p>

        <Container
          style={{
            marginTop: "40px",
          }}
        >
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
              xs={12}
              md={12}
              lg={12}
            >
              <img
                src={Location}
                alt="Address"
                style={{
                  width: "60px",
                  height: "60px",
                }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
              xs={12}
              md={12}
              lg={12}
            >
              <address
                style={{
                  marginTop: "30px",
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

                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Hyderabad
                </p>
              </address>
            </Col>
          </Row>
          <Row>
            <section
              onClick={redirectToGmail}
              style={{
                cursor: "pointer",
              }}
            >
              <Col
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
                xs={12}
                md={12}
                lg={12}
              >
                <img
                  src={Mail}
                  alt="Mail"
                  style={{
                    width: "60px",
                    height: "60px",
                    cursor: "pointer",
                  }}
                  onClick={redirectToGmail}
                />
              </Col>
              <Col>
                <p
                  style={{
                    marginTop: "20px",
                    color: "white",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "2rem",
                      color: "white",
                    }}
                  >
                    E-Mail:
                  </span>
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  polusaiashish8364@gmail.com
                </p>
              </Col>
            </section>
          </Row>

          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                marginTop: "20px",
              }}
              xs={12}
              md={12}
              lg={12}
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </div>

                <p
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContentL: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",

                      fontSize: "1.25rem",
                    }}
                  >
                    LinkedIn Profile
                  </span>
                </p>
              </a>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
              xs={12}
              md={12}
              lg={12}
            >
              <a
                href="https://www.snapit.tech/ashish8364/polu-sai-ashish"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "lightgrey",
                }}
              >
                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={Resume}
                    alt="Resume"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </section>

                <p
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",

                      fontSize: "1.25rem",
                    }}
                  >
                    Resume
                  </span>
                  <br />
                </p>
              </a>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
              xs={12}
              md={12}
              lg={12}
            >
              <a
                href="https://github.com/saiashish8364"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "lightgrey",
                }}
              >
                <section
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={GitHub}
                    alt="GitHub"
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  />
                </section>
                <p
                  style={{
                    marginTop: "30px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                    }}
                  >
                    GitHub Profile
                  </span>
                </p>
              </a>
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
export default MobileContactMe;
