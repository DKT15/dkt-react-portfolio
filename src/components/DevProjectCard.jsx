import React from "react";
import Card from "react-bootstrap/Card";
import projects from "../devprojects.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/DevProjectCard.css";

// Code for my cards to go on the projects page.
export default function GridExample() {
  return (
    <>
      <h1 className="projects__title">Development Projects</h1>
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
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[6].image} />
              <Card.Body>
                <Card.Title>{projects[6].project}</Card.Title>
                <Card.Text>{projects[6].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[6].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[6].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[7].image} />
              <Card.Body>
                <Card.Title>{projects[7].project}</Card.Title>
                <Card.Text>{projects[7].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[7].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[7].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[8].image} />
              <Card.Body>
                <Card.Title>{projects[8].project}</Card.Title>
                <Card.Text>{projects[8].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[8].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[8].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[9].image} />
              <Card.Body>
                <Card.Title>{projects[9].project}</Card.Title>
                <Card.Text>{projects[9].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[9].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[9].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[10].image} />
              <Card.Body>
                <Card.Title>{projects[10].project}</Card.Title>
                <Card.Text>{projects[10].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[10].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[10].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[11].image} />
              <Card.Body>
                <Card.Title>{projects[11].project}</Card.Title>
                <Card.Text>{projects[11].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[11].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[11].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[12].image} />
              <Card.Body>
                <Card.Title>{projects[12].project}</Card.Title>
                <Card.Text>{projects[12].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[12].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[12].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[13].image} />
              <Card.Body>
                <Card.Title>{projects[13].project}</Card.Title>
                <Card.Text>{projects[13].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[13].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[13].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[14].image} />
              <Card.Body>
                <Card.Title>{projects[14].project}</Card.Title>
                <Card.Text>{projects[14].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[14].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[14].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[15].image} />
              <Card.Body>
                <Card.Title>{projects[15].project}</Card.Title>
                <Card.Text>{projects[15].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[15].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[15].repo} target="_blank">
                  GitHub Repo
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={projects[16].image} />
              <Card.Body>
                <Card.Title>{projects[16].project}</Card.Title>
                <Card.Text>{projects[16].description}</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href={projects[16].deployed} target="_blank">
                  Website Link
                </Card.Link>
                <Card.Link href={projects[16].repo} target="_blank">
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
