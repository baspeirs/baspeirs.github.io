import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import "./style.css";
import BryceSpeirs from "../../../assets/photos/BryceSpeirs.jpg";
function About() {
    return (
        <div id="about">
            <Container id="page-body">
            <div id="aboutToggle"></div>
                <Row>
                    <Column size="lg-12">
                        <h1 id="aboutHeader">About Me</h1>
                    </Column>
                </Row>
                <div id="top-content">
                <Row>
                        <Column size="lg-12">
                            <div id="image-holder">
                                <img id="profile-img" src={BryceSpeirs} alt="Bryce Speirs" />
                            </div>
                        </Column>
                </Row>
                <Row>
                <Column size="lg-12" id="about-description">
                            <div id="about-description">
                            <p id="welcome">Thank you for viewing my portfolio!</p>
                            <p>You may have noticed by now that I am a passionate and dedicated software engineer, with expeirence in full stack web development and Robotic Process Automation. I truly enjoy about my work as an engineer and am not afraid to branch out of my comfort zone. Outside of work, you can find me playing or listening to  music, enjoying any type of fantasy, playing video games, or watching baseball.</p>
                            </div>
                        </Column>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default About;