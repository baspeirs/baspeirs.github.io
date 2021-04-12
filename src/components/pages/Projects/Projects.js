import React from "react";
import Container from "../../Container";
import Row from "../../Row";
// import Column from "../../Column";
import "./style.css";
import ProjectCard from "../../ProjectCard";
import DungBud from "../../../assets/photos/DungBud.PNG";
import GalaxyRaider from "../../../assets/photos/galaxyRaider.PNG";
import ScheduleTracker from "../../../assets/photos/ScheduleTracker.PNG";
import ReadmeGenerator from "../../../assets/photos/ReadmeGenerator.PNG";
import WeatherApp from "../../../assets/photos/WeatherApp.PNG";
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
            title: "Schedule Tracker",
            imgSrc: ScheduleTracker,
            imgAlt: "Schedule Tracker page",
            description: "An application to host an updateable Jimmy Johns weekly Schedule and make time off requests",
            page: "https://scheduletracker2706.herokuapp.com/",
            github: "https://github.com/baspeirs/ScheduleTracker"
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
    ];

    return (
        <div id="projects">
            <Container>
                <div id="projectsToggle"></div>
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
        </div>
    )
}

export default Portfolio;