import React from "react";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import Badge from "../../Badge";
import "./style.css";

function Skills() {
    const skills1 = [
        { name: "JavaScript / Node.js" },
        { name: "SQL / Sequelize" },
        { name: "NoSQL / Mongoose" },
        { name: "HTML5 / CSS3" },
        { name: "Bootstrap" },
        { name: "CSS Grid" },
        { name: "React" },
        { name: "Git Source Control" },
        { name: "Python" },
        { name: "Google Cloud Platform"},
        { name: "Azure"},
        { name: "Express.js"},
        { name: "jQuery"},
        { name: "APIs"},
        { name: "JSON"}
    ]

    return (
        <div id="skills">
            <Container>
                <div id="skillsToggle"></div>
                <h2 id="skillsHeader">Skills</h2>
                <Row>
                    {skills1.map(skill => {
                        return <Column size="md-4">
                            <Badge skill={skill.name}/>
                        </Column>
                    })};
                </Row>
            </Container>
        </div>
    )
}

export default Skills