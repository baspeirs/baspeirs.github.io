import React from "react";
import "./About.css";
import { DynoButton } from "../../common/components/DynoButton";
import DownloadIcon from '../../../assets/photos/Icons/icons8-download-32.png';

function About() {

    return (
        <div id="about" className='about-block'>
            <div className='about-text'>
                <h2 className='about-header'>About Me</h2>
                <p className='about-details'>I am a dedicated software engineer with experience in Full Stack Web Development and Robotic Process Automation. I truly enjoy my work as an engineer and am not afraid to branch out of my comfort zone. Outside of work I enjoy music, video games, and baseball.</p>
            </div>
            <DynoButton
                icon={DownloadIcon}
                text='Download Resume'
                buttonStyle='button-transparent'
                buttonSize='button-large'
                link={'https://drive.google.com/file/d/1FOH3DflYbBTe2QXRi2Ob2KrSPHvND44G/view?usp=sharing'}
                newTab={true}
            />
        </div>
    )
}

export default About;