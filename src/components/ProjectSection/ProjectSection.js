import React, { useState, useRef, useEffect } from "react";
import { DynoButton } from '../common/components/DynoButton';
import LaptopIcon from '../../assets/photos/Icons/icons8-laptop-32.png';
import GitHubIcon from '../../assets/photos/Icons/icons8-github-32.png';
import './style.css';

export const ProjectSection = (props) => {
    const [scrolledOver, setScrolledOver] = useState ({
        elementClass: 'empty',
        scrolledOver: false
    })
    const projectRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                props.changeBackground(props.project.theme.background)
                if (!scrolledOver.scrolledOver) {
                    setScrolledOver({
                        elementClass: 'project-details',
                        scrolledOver: true
                    });
                }
            }
        })
        observer.observe(projectRef.current)
    }, [props.changeBackground, scrolledOver, props.project]);

    return (
        <section className={`project-section ${props.orientation}`}>
            <img className='project-img' src={props.project.imgSrc} alt={props.project.imgAlt} />
            <div className={scrolledOver.elementClass} style={{ color: props.project.theme.text }}>
                <h3 className="project-header" ref={projectRef}>{props.project.title}</h3>
                <p className="project-description">{props.project.description}</p>
                <p className="project-tech">{props.project.poweredBy}</p>
                <div className='button-container'>
                    <DynoButton
                        icon={LaptopIcon}
                        text='View Page'
                        buttonStyle='button-fill'
                        buttonSize='button-small'
                        link={props.project.page}
                        newTab={true}
                    />
                    <DynoButton
                        icon={GitHubIcon}
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
