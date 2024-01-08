import React, { useState } from "react";
import './Navbar.css';
import { DynoButton } from "../common/components/DynoButton";
import MenuIcon from '../../assets/photos/Icons/icons8-menu-32.png';

export const Navbar = () => {
    const [showNavBottom, setShowNavBottom] = useState('hide')
    const toggleNavBottom = () => {
        setShowNavBottom(showNavBottom === 'show' ? 'hide' : 'show')
    }
    return (
        <div className='nav-bar'>
            <div className='nav-main'>
                <div className='nav-left'>
                    <p className='nav-title'>Bryce Speirs</p>
                    <div className='nav-tabs nav-horizontal'>
                        <a className='nav-tab' href="#hero-section">Home</a>
                        <a className='nav-tab' href="#projects">Projects</a>
                        <a className='nav-tab' href="#about">About</a>
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='button-screen-large'>
                        <DynoButton
                            icon='mail'
                            text='Contact Me'
                            buttonStyle='button-fill'
                            buttonSize='button-small'
                        />
                    </div>
                    <div className='button-screen-small'>
                        <button className='nav-button' onClick={toggleNavBottom}><img src={MenuIcon} alt='menu'/></button>
                    </div>
                </div>
            </div>
            <div className={`${showNavBottom}-bottom`}>
                <div className={`nav-tabs nav-vertical`}>
                    <a className='nav-tab' href="#hero-section">Home</a>
                    <a className='nav-tab' href="#projects">Projects</a>
                    <a className='nav-tab' href="#about">About</a>
                </div>
            </div>
        </div>
    )
};
