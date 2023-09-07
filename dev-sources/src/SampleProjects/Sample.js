// import classes from "./Sample.module.css";
import MailBox from "../ProjectImages/MailBox.jpg";
import Expense from "../ProjectImages/expenseTracker.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import GitHub from "../Icons/github.png";
import project from "../Icons/project.png";

const Sample = () => {
  return (
    <>
      <div
        style={{
          marginTop: "3%",
          marginLeft: "9%",
        }}
      >
        <Container>
          <div>
            <p
              style={{
                fontSize: "1.5rem",
                marginLeft: "-70px",
                color: "lightgray",
              }}
            >
              <img
                src={project}
                alt="Project"
                style={{ width: "35px", height: "30px", marginRight: "10px" }}
              />
              Sample Projects {"--->"}
            </p>
            <p
              style={{
                color: "gray",
                marginBottom: "50px",
                fontSize: "1.5rem",
                marginLeft: "-70px",
              }}
            >
              Here's some of my projects that I have worked on.
            </p>
            <p
              style={{
                color: "gray",
                marginTop: "-35px",
                marginBottom: "50px",
                fontSize: "1.5rem",
                marginLeft: "-70px",
              }}
            >
              Click to view source code in GitHub
            </p>
          </div>
        </Container>
        <Container>
          <Row>
            <Col lg={6} xl={6} xxl={6}>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={MailBox} />
                <Card.Body>
                  <Card.Title>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Mail-Box
                      <a
                        href="https://github.com/saiashish8364"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={GitHub}
                          alt="GitHub"
                        />
                      </a>
                    </p>
                  </Card.Title>
                  <Card.Text>
                    A project for sending and receiving mails using firebase.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} xl={6} xxl={6}>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={Expense} />
                <Card.Body>
                  <Card.Title>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Expense-Tracker
                      <a
                        href="https://github.com/saiashish8364"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src={GitHub}
                          alt="GitHub"
                        />
                      </a>
                    </p>{" "}
                  </Card.Title>
                  <Card.Text>
                    A project for tracking expenses using firebase.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <p
            style={{
              fontSize: "1.5rem",
              marginLeft: "35%",
              marginTop: "50px",
            }}
          >
            <a
              href="/Projects"
              style={{ textDecoration: "none", color: "lightgreen" }}
            >
              Explore More---{">"}
            </a>
          </p>
        </Container>
      </div>
    </>
  );
};
export default Sample;
