import React from "react";
import "./style.css";
import { projectList } from './portfolio';
import { ProjectSection } from "../../ProjectSection/ProjectSection";

function Portfolio(props) {
    const isEven = (int) => {
        return int % 2 === 0;
    }

    return (
        <section id='projects'>
            {projectList.map((project, index) => {
                return <div>
                    <ProjectSection
                        key={index}
                        orientation={isEven(index) ? 'picture-left' : 'picture-right'}
                        project={project}
                        styleIndicator={index}
                        changeBackground={props.changeBackground}
                    />
                </div>
            })}
        </section>

    )
}

export default Portfolio;