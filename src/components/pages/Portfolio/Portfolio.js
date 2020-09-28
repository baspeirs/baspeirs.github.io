import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import Footer from "../../Footer/";
import "./style.css";
// import Background from "../../Background";
import ProjectCard from "../../ProjectCard";
import Badge from "../../Badge";
import DungBud from "../../../assets/photos/DungBud.PNG";
import GalaxyRaider from "../../../assets/photos/GalaxyRaider.PNG";
import Burger from "../../../assets/photos/Burger.PNG";
import NoteTaker from "../../../assets/photos/NoteTaker.PNG";
import Quickieoke from "../../../assets/photos/Quickieoke.PNG";
import ReadmeGenerator from "../../../assets/photos/ReadmeGenerator.PNG";
import WeatherApp from "../../../assets/photos/WeatherApp.PNG";
// import InkCentral from "../../../assets/photos/InkCentral.PNG";
import Tattoo from "../../../assets/photos/tattoo.jpg";


function Portfolio() {
    const projects1 = [
        {
            title: "Ink Central",
            imgSrc: Tattoo,
            imgAlt: "Ink Central",
            description: "Sign up today to connect with Artists and Canvases alike on this tattoo social network",
            page: "https://ink-central.herokuapp.com/",
            github: "https://github.com/kylest0kes/ink_central"
        },
        {
            title: "Galaxy Raider",
            imgSrc: GalaxyRaider,
            imgAlt: "Galaxy Raider home page",
            description: "Explore the galaxy and collect resources to take back to your home planet.",
            page: "https://bc-group-project2.herokuapp.com/",
            github: "https://github.com/baspeirs/Galaxy-Raider"
        },
        {
            title: "Burger Logger",
            imgSrc: Burger,
            imgAlt: "Burger Logger home page",
            description: "An application for you to keep track of your favorite burgers and burgers you wish to try!",
            page: "https://nameless-inlet-77869.herokuapp.com/",
            github: "https://github.com/baspeirs/Eat_Da_Burger"
        }
    ]
    const projects2 = [
        {
            title: "README Generator",
            imgSrc: ReadmeGenerator,
            imgAlt: "README Generator in action",
            description: "An aplication built to ask a few questions and automatically gnerate a good README.md file",
            page: "",
            github: "https://github.com/baspeirs/README-Generator"
        },
        {
            title: "Open Weather App",
            imgSrc: WeatherApp,
            imgAlt: "Open Weather App home page",
            description: "An application that allows you to search for a city and get the current weather details.",
            page: "https://baspeirs.github.io/Open-Weather-App/",
            github: "https://github.com/baspeirs/Open-Weather-App"
        },
        {
            title: "Dungeon Buddy",
            imgSrc: DungBud,
            imgAlt: "Dungeon Buddy home hage",
            description: "An application to assist you with your every day Dungeons & Dragons 5th Edition needs!",
            page: "https://baspeirs.github.io/DungeonBuddy/",
            github: "https://github.com/baspeirs/DungeonBuddy"
        }
    ]

    const projects3 = [
        {
            title: "Note Taker",
            imgSrc: NoteTaker,
            imgAlt: "Note Taker home page",
            description: "An application used to take, read, and delete notes",
            page: "https://infinite-meadow-35708.herokuapp.com/",
            github: "https://github.com/baspeirs/Note-Taker"
        },
        {
            title: "Quickieoke",
            imgSrc: Quickieoke,
            imgAlt: "Quickieoke",
            description: "Get singin with this karaoke buddy app",
            page: "https://baspeirs.github.io/teamKaraokeApp/",
            github: "https://github.com/baspeirs/teamKaraokeApp"
        }
    ]

    const skills1 = [
        { name: "JavaScript / Node.js" },
        { name: "SQL / Sequelize" },
        { name: "NoSQL / Mongoose" }
    ]
    const skills2 = [
        { name: "HTML5 / CSS3" },
        { name: "Bootstrap" },
        { name: "CSS Grid" }
    ]
    const skills3 = [
        { name: "React" },
        { name: "Git Source Control" },
        { name: "Python" }
    ]

    return (
        <div id="page-body">

            <Container>
                <Row>
                    <Column size="4">
                        <h1>Portfolio</h1>
                    </Column>
                    <Column size="8" />
                </Row>
                <h2>Skills</h2>
                <Row>
                    <Column size="md-4">
                        {skills1.map(skill => {
                            return <Badge skill={skill.name} />
                        })}
                    </Column>
                    <Column size="md-4">
                        {skills2.map(skill => {
                            return <Badge skill={skill.name} />
                        })}
                    </Column>
                    <Column size="md-4">
                        {skills3.map(skill => {
                            return <Badge skill={skill.name} />
                        })}
                    </Column>
                </Row>
                <h2>Projects</h2>
                <Row>
                    {projects1.map(project => {
                        return <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgSrc={project.imgSrc}
                            imgAlt={project.imgAlt}
                            page={project.page}
                            github={project.github}
                        />
                    })}
                </Row>
                <Row>
                    {projects2.map(project => {
                        return <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgSrc={project.imgSrc}
                            imgAlt={project.imgAlt}
                            page={project.page}
                            github={project.github}
                        />
                    })}
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Portfolio;