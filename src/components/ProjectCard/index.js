import React from "react";
import "./style.css";
import Column from "../Column";
import Row from "../Row"

function ProjectCard(props) {
    return (
        <div>
            <div className="card bg-dark text-white">
                <img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
                <div className="card-img-overlay">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <Row>
                        <Column size="6">
                            <a href={props.page}>
                                <button className="portButton">Page</button>
                            </a>
                        </Column>
                        <Column size="6">
                            <a href={props.github}>
                                <button className="portButton">GitHub</button>
                            </a>
                        </Column>
                    </Row>

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;