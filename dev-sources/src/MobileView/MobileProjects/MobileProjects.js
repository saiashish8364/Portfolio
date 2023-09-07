import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import GitHub from "../../Icons/github.png";
import MailBox from "../../ProjectImages/MailBox.jpg";
import Expense from "../../ProjectImages/expenseTracker.jpg";
import Ecommerce from "../../ProjectImages/ecommerce.jpg";
import ToDo from "../../ProjectImages/todo.jpg";

const MobileProjects = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1
              style={{
                marginTop: "15px",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Projects
            </h1>
            <p
              style={{
                marginBottom: "20px",
                color: "white",
              }}
            >
              I love building projects and practice new skills, here's an
              archive of things that I've worked on.
            </p>
            <Container>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    style={{
                      width: "23rem",
                    }}
                    bg="black"
                  >
                    <Card.Img variant="top" src={MailBox} />
                    <Card.Body>
                      <Card.Title>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "white",
                          }}
                        >
                          Mail-Box{" "}
                          <button
                            disabled
                            style={{
                              marginLeft: "-100px",
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "10%",
                              height: "25px",
                              width: "70px",
                              fontSize: "0.9rem",
                            }}
                          >
                            React Js
                          </button>
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
                      <Card.Text style={{ color: "white" }}>
                        The Mail-Box is project that functions fully by sending
                        the mails and receiving them.The mails are realtime.But
                        it only works for users who sign up in to my user
                        database.
                      </Card.Text>
                      <a
                        href="https://github.com/saiashish8364/MailBox.git"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button variant="primary">
                          View Source Code on GitHub
                        </Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Card
                    style={{
                      width: "23rem",
                    }}
                    bg="black"
                  >
                    <Card.Img variant="top" src={Expense} />
                    <Card.Body>
                      <Card.Title>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "white",
                          }}
                        >
                          Expense-Tracker
                          <button
                            disabled
                            style={{
                              marginLeft: "-50px",
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "10%",
                              height: "25px",
                              width: "70px",
                              fontSize: "0.9rem",
                            }}
                          >
                            React Js
                          </button>
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
                      <Card.Text style={{ color: "white" }}>
                        This is project for people who want to track their
                        expenses. we need to add the expenses, we can edit them
                        and even we can delete the unwanted expenses. this is a
                        user specific application.
                      </Card.Text>
                      <a
                        href="https://github.com/saiashish8364/Expense-Tracker.git"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button variant="primary">
                          View Source Code on GitHub
                        </Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                  }}
                >
                  <Card style={{ width: "23rem" }} bg="black">
                    <Card.Img variant="top" src={ToDo} />
                    <Card.Body>
                      <Card.Title>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "white",
                          }}
                        >
                          ToDo's{" "}
                          <button
                            disabled
                            style={{
                              marginLeft: "-120px",
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "10%",
                              height: "25px",
                              width: "70px",
                              fontSize: "0.9rem",
                            }}
                          >
                            Next Js
                          </button>
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
                      <Card.Text style={{ color: "white" }}>
                        It's a general app used to note tasks that we want to
                        complete them. we can edit and delete the Todo's. after
                        completion of the task we can mark them as done and it
                        will be marked as completed inside mongoDB and removed
                        from screen.we can see the finished task's in Completed
                        Task's tab.
                      </Card.Text>
                      <a
                        href="https://github.com/saiashish8364/nextjs-ToDo-app.git"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button variant="primary">
                          View Source Code on GitHub
                        </Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Card style={{ width: "25rem" }} bg="black">
                    <Card.Img variant="top" src={Ecommerce} />
                    <Card.Body>
                      <Card.Title>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "white",
                          }}
                        >
                          Ecommerce-Website
                          <button
                            disabled
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "10%",
                              height: "25px",
                              width: "70px",
                              fontSize: "0.75rem",
                            }}
                          >
                            React Js
                          </button>
                          <button
                            disabled
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              borderRadius: "10%",
                              height: "25px",
                              width: "70px",
                              fontSize: "0.75rem",
                            }}
                          >
                            Bootstrap
                          </button>
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
                      <Card.Text style={{ color: "white" }}>
                        This is my first application that i have built with
                        React and deployed it. It's like an normal ecommerce
                        website in that we can add to cart and buy the products.
                        We can see tickets for the Tours that are hosted on the
                        perticular dates.
                      </Card.Text>
                      <a
                        href="https://github.com/saiashish8364/ecommerce.git"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button variant="primary">
                          View Source Code on GitHub
                        </Button>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MobileProjects;
