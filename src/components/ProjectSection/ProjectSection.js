import React, { useRef, useEffect } from "react";
import { DynoButton } from '../common/components/DynoButton'
import './style.css';

export const ProjectSection = (props) => {
    const projectRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                props.changeBackground(props.project.theme.background)
            }
        })
        observer.observe(projectRef.current)
    }, []);

    return (
        <section className={`project-section ${props.orientation}`}>
            <img className='project-img' src={props.project.imgSrc} alt={props.project.imgAlt} />
            <div className='project-details' style={{ color: props.project.theme.text }}>
                <h3 className="project-header" ref={projectRef}>{props.project.title}</h3>
                <p className="project-description">{props.project.description}</p>
                <p className="project-tech">{props.project.poweredBy}</p>
                <div className='button-container'>
                    <DynoButton
                        icon='laptop_windows'
                        text='View Page'
                        buttonStyle='button-fill'
                        buttonSize='button-small'
                        link={props.project.page}
                        newTab={true}
                    />
                    <DynoButton
                        icon='laptop_windows'
                        text='View GitHub'
                        buttonStyle='button-transparent'
                        buttonSize='button-small'
                        link={props.project.github}
                        newTab={true}
                    />
                </div>
            </div>
        </section>
    );
};
