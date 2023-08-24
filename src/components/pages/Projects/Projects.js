import React from "react";
import Container from "../../Container";
import Row from "../../Row";
// import Column from "../../Column";
import "./style.css";
import ProjectCard from "../../ProjectCard";
import DungBud from "../../../assets/photos/DungeonBuddy.PNG";
import GalaxyRaider from "../../../assets/photos/GalaxyRaider3.PNG";
import RedShift from "../../../assets/photos/RedShift.PNG";
// import Tattoo from "../../../assets/photos/InkCentral.PNG";
import Column from "../../Column";
import SchedudleTrackerPro from "../../../assets/photos/ScheduleTrackerPro.png"


function Portfolio() {
    const projects1 = [
        {
            title: "Schedule Tracker Pro",
            imgSrc: SchedudleTrackerPro,
            imgAlt: "ScheduleTrackerPro",
            description: "Supply staff with a web based schedule, while you update it on a simple spreadsheet",
            poweredBy: "JavaScript, Node.js, React.js, MongoDB with Mongoose, Express.js, Passport, Axios, Dotenv, GoogleApis, Google Cloud Platform, Google Sheets, MongoDB Atlas, HTML5, and CSS3. Website hosted with Heroku and repository stored on GitHub.",
            page: "https://scheduletrackerpro.herokuapp.com/",
            github: "https://github.com/baspeirs/ScheduleTrackerPro"
        },
        // {
        //     title: "Ink Central",
        //     imgSrc: Tattoo,
        //     imgAlt: "InkCentral",
        //     description: "Sign up today to connect with Artists and Canvases alike on this tattoo social network",
        //     poweredBy: "JavaScript, Node.js, React.js, MongoDB with Mongoose, Express.js, Filestack.js, Passport, Axios, Hero-Slider, Dotenv, HTML5, and CSS3. Website hosted with Heroku and repository stored on GitHub.",
        //     page: "https://ink-central.herokuapp.com/",
        //     github: "https://github.com/kylest0kes/ink_central"
        // },
        {
            title: "Galaxy Raider",
            imgSrc: GalaxyRaider,
            imgAlt: "GalaxyRaider",
            description: "Explore the galaxy and collect resources to take back to your home planet.",
            poweredBy: "JavaScript, Node.js, J-Query, SQL with Sequelize, Handlebars, Express.js, NES Framework, CSS Grid, CSS3, and HTML5. Website hosted with Heroku and repository stored on GitHub.",
            page: "https://bc-group-project2.herokuapp.com/",
            github: "https://github.com/baspeirs/Galaxy-Raider"
        },
        {
            title: "Dungeon Buddy",
            imgSrc: DungBud,
            imgAlt: "DungeonBuddy",
            description: "An application to assist you with your every day Dungeons & Dragons 5th Edition needs!",
            poweredBy: "Javascript, J-Query, Bootstrap, HTML5, and CSS3. Repository and Page hosted on Github/Github Pages.",
            page: "https://baspeirs.github.io/DungeonBuddy/",
            github: "https://github.com/baspeirs/DungeonBuddy"
        },
        {
            title: "Redshift",
            imgSrc: RedShift,
            imgAlt: "RedshiftGuild",
            description: "A homepage created for a World of Warcraft Classic guild with a built in Live Roster, which can be updated using a google sheet.",
            poweredBy: "JavaScript, J-Query, Google Cloud Platform, Google Sheets API, Bootstrap, HTML5, and CSS3. Page hosted with Heroku and repository stored on GitHub.",
            page: "https://redshift-guild.herokuapp.com/",
            github: "https://github.com/baspeirs/Redshift"
        }
    ];

    return (
        <div id="projects">
            <Container>
                <div id="projectsToggle" className="toggle"></div>
                <Row>
                    <Column size="12">
                        <h2 id="projectsHeader">Projects</h2>
                    </Column>
                </Row>
                <Row>
                    {projects1.map(project => {
                        return <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgSrc={project.imgSrc}
                            imgAlt={project.imgAlt}
                            poweredBy={project.poweredBy}
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