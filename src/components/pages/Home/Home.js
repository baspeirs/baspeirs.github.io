import React, { useRef, useEffect } from "react";
import "./Home.css";
import { DynoButton } from "../../common/components/DynoButton";
import LaptopIcon from '../../../assets/photos/Icons/icons8-laptop-32.png';
import DownloadIcon from '../../../assets/photos/Icons/icons8-download-32.png';


function Home({ changeBackground }) {
    const roles = ['Full Stack Developer.'];
    const homeRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                changeBackground('transparent')
            }
        })
        observer.observe(homeRef.current)
    }, [changeBackground])

    return (
        <section id='hero-section'>
            <div className='hero-content'>
                <p className='hero-sub-header' ref={homeRef}>{`<Hello World/> My name is Bryce Speirs and I'm a`}</p>
                <h1 className='hero-header'>{roles[0]}</h1>
                <div id='hero-buttons'>
                    <DynoButton
                        icon={LaptopIcon}
                        text='View Projects'
                        buttonStyle='button-fill'
                        buttonSize='button-large'
                        link='#projects'
                    />
                    <DynoButton
                        icon={DownloadIcon}
                        text='Download Resume'
                        buttonStyle='button-transparent'
                        buttonSize='button-large'
                        link='https://drive.google.com/file/d/1FOH3DflYbBTe2QXRi2Ob2KrSPHvND44G/view?usp=sharing'
                        newTab={true}
                    />
                </div>
            </div>
        </section>
    )
};

export default Home;