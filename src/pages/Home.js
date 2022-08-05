import React from "react";
import MainNavBar from "../components/MainNavBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import bioPic from "../data/images/bioPic.jpeg";
import { data } from "../data/intro.js";

import "./style/Home.css";

function Home() {
    return <div>
        <MainNavBar></MainNavBar>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Image src={bioPic} id="img" />
                </Col>
                <Col xs={12} md={8}>
                    <p>{data}</p>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Home;