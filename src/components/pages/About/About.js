import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import "./style.css";
function About() {
    return (
        <div id="about">
            <Container id="page-body">
            <div id="aboutToggle" className="toggle"></div>
                <Row>
                    <Column size="lg-12">
                        <h1 id="aboutHeader">About Me</h1>
                    </Column>
                </Row>
                <div id="top-content">
                {/* <Row>
                        <Column size="lg-12">
                            <div id="image-holder">
                                <img id="profile-img" src={BryceSpeirs} alt="Bryce Speirs" />
                            </div>
                        </Column>
                </Row> */}
                <Row>
                <Column size="lg-12" id="about-description">
                            <div id="about-description">
                            
                            <p>I am a dedicated software engineer with experience in Full Stack Web Development and Robotic Process Automation. I truly enjoy my work as an engineer and am not afraid to branch out of my comfort zone. Outside of work I enjoy music, video games, and baseball.</p>
                            <p id="welcome">Thank you for viewing my portfolio!</p>
                            </div>
                        </Column>
                </Row>
                </div>
            </Container>
        </div>
    )
}

export default About;