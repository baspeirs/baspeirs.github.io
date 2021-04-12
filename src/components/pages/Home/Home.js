import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import "./style.css";

function Home() {
    return (
        <div>
            <div id="home">
            <Container>
                <Row>
                    <Column size="2" />
                    <Column size="8">
                        <article className="hero-body">
                            <section className="welcome">
                                <h1 class="line-1 anim-typewriter" id="BryceSpeirs">Bryce Speirs</h1>
                                <h2>Full Stack Web Developer</h2>
                                <p id="port-intro">Check out my portfolio</p>
                                <a href="#projects"><button className="btn" id="home-button">View Projects</button></a>
                            </section>
                        </article>
                    </Column>
                    <Column size="2" />
                </Row>
            </Container>
        </div>
        </div>
    )
}

export default Home;