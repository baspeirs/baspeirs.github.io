import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import "./style.css";
import Footer from "../../Footer/";
import Stars from "../../../assets/photos/Stars.mp4";


function Home() {
    return (
        <div>
            <div id="hero-section">
            <video autoPlay muted loop id="hero-video">
                <source src={Stars} />
                <source src="../../../assets/photos/Pexels Videos 2611250 (1).mp4" />
            </video>

            <Container>
                <Row>
                    <Column size="2" />
                    <Column size="8">
                        <article className="hero-body">
                            <section className="welcome">
                                <h1>Bryce Speirs</h1>
                                <h2>Full Stack Web Developer</h2>
                                <p id="port-intro">Check out my portfolio</p>
                                <a href="#/portfolio"><button id="home-button"><p>View Portfolio</p></button></a>
                            </section>
                        </article>
                    </Column>
                    <Column size="2" />
                </Row>
            </Container>
            
        </div>
        <Footer />
        </div>
    )
}

export default Home;