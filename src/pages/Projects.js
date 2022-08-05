import React from "react";
import MainNavBar from "../components/MainNavBar";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { data } from "../data/projects";

import "./style/Projects.css";

function Projects() {
    return <div>
        <MainNavBar></MainNavBar>
        <br />
        <div className="box">
            <h1 className="title"> Projects</h1>
            <br />
            <Row xs={1} md={3} className="g-4">
                {data.map((project, idx) => (
                    <Col>
                        <Card key={`card ${idx}`} className="projCard" border="dark">
                            <Card.Img variant="top" src={project.src} alt="Image" className="projCardImg" />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>
                                    <p>{project.desc}</p>
                                    {project.link &&
                                        <p><strong>Link: </strong><a href={project.link} target="_blank" rel="noopener noreferrer">Link</a></p>
                                    }
                                    <p className="tech"><strong>Tech used: </strong>{project.tech}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    </div >
}

export default Projects;