import React from "react";
import "./style.css";
import Column from "../Column";
import Row from "../Row";

function ProjectCard(props) {
    return (
        <Column size="xl-12">
            <div class="card mb-3 proj-div">
                <div class="row g-0">
                    <div class="col-md-4" id={props.imgAlt}>
                        <img src={props.imgSrc} class="img-fluid rounded-start card-img" alt={props.imgAlt} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-description">{props.description}</p>
                            <p class="card-tech">{props.poweredBy}</p>
                            <Row>
                                <Column size="6">
                                    <a href={props.page}>
                                        <button className="portButton webPageButton btn">Web Page</button>
                                    </a>
                                </Column>
                                <Column size="6">
                                    <a href={props.github}>
                                        <button className="portButton gitHubButton btn">GitHub</button>
                                    </a>
                                </Column>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Column>

    )
}

export default ProjectCard;