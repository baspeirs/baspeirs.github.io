import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import Footer from "../../Footer/";
import "./style.css";
// import Background from "../../Background";
import EducationCard from "../../EducationCard";
import WorkHistoryCard from "../../WorkHistoryCard/";
import workHistory from "../../../workHistory.json";
import education from "../../../education.json";
function About() {
    return (
        <div id="page-body">

            <Container id="page-body">
                <Row>
                    <Column size="6">
                        <h1>About Me</h1>
                    </Column>
                    <Column size="6" />
                </Row>
                <div id="top-content">
                <Row>
                        <Column size="2" id="image-holder">
                                <img id="profile-img" src="../../../assets/photos/1me-x2.jpg" alt="image of me" />
                        </Column>
                        <Column size="10" id="about-description">
                            <p id="welcome">Hello, welcome to my portfolio!</p>
                            <p>My name is Bryce, I am a passionate and dedicated full stack web developer, with a background in resturant operations and finance. Outside of work, you can find me geeking out on music, fantacy, video games, and various sports.</p>
                            
                        </Column>
                </Row>
                </div>
                <Row>
                    <Column size="lg-6">
                        <h2>Education</h2>
                        {education.map(school => {
                            return <EducationCard 
                                school={school.school}
                                term={school.term}
                                completion={school.completion}
                            />
                        })}
                    </Column>
                    <Column size="lg-6">
                        <h2>Work History</h2>
                        {workHistory.map(job => {
                            return <WorkHistoryCard 
                                employer={job.employer}
                                title={job.title}
                                term={job.term}
                            />
                        })}
                    </Column>
                </Row>

                <div class="spacer"></div>
            </Container>
            <Footer />
        </div>
    )
}

export default About;