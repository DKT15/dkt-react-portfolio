import React from "react";
import Card from "react-bootstrap/Card";
import projects from "../projects.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Card.css";

// Code for my cards to go on the projects page.
function GridExample() {
  return (
    <>
      <h1 className="projects__title">Projects</h1>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[0].image} />
              <Card.Body>
                <Card.Title>{projects[0].project}</Card.Title>
                <Card.Text>{projects[0].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[0].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[0].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[1].image} />
              <Card.Body>
                <Card.Title>{projects[1].project}</Card.Title>
                <Card.Text>{projects[1].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[1].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[1].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[2].image} />
              <Card.Body>
                <Card.Title>{projects[2].project}</Card.Title>
                <Card.Text>{projects[2].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[2].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[2].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[3].image} />
              <Card.Body>
                <Card.Title>{projects[3].project}</Card.Title>
                <Card.Text>{projects[3].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[3].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[3].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[4].image} />
              <Card.Body>
                <Card.Title>{projects[4].project}</Card.Title>
                <Card.Text>{projects[4].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[4].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[4].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[5].image} />
              <Card.Body>
                <Card.Title>{projects[5].project}</Card.Title>
                <Card.Text>{projects[5].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[5].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[5].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default GridExample;
