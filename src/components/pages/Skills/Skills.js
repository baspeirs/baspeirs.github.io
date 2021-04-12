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
    ];

    return (
        <div id="skills">
            <Container>
                <div id="skillsToggle"></div>
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
            </Container>
        </div>
    )
}

export default Skills