import React from "react";
import Card from "react-bootstrap/Card";
import devProjects from "../devprojects.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/DevProjectCard.css";

// Code for my cards to go on the projects page.
// Mapping over all devProjects data to format it in the below bootstrap code for cards.
export default function GridExample() {
  const devProjectsData = devProjects.map((project) => {
    return Array.from({ length: 1 }).map((_, idx) => (
      <Col key={idx}>
        <Card style={{ width: "480px" }}>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.project}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={project.deployed} target="_blank">
              Website Link
            </Card.Link>
            <Card.Link href={project.repo} target="_blank">
              GitHub Repo
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    ));
  });

  // Importing all the data I have got from the above map to be returned in the dom. It is formatted with the Row component from bootstrap.
  return (
    <>
      <h1 className="projects__title">Development Projects</h1>
      <Row xs={1} md={3} className="g-4">
        {devProjectsData}
      </Row>
    </>
  );
}
