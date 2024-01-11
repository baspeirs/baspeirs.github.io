import React from "react";
import '../styles/DynoButton.css';

export const DynoButton = (props) => {
    // send props for
        // link = hyperlink for target location
        // newTab = true or false for opening in new tab (no value === false)
        // buttonSize = small or large button sizes
        // buttonStyle = green fill or transparent 
        // icon = icon image
        // text = button text

    return (
        <a href={`${props.link}`} target={props.newTab ? '_blank' : ''} rel="noreferrer" style={{textDecoration: 'none'}}>
            <button className={`dyno-button ${props.buttonSize} ${props.buttonStyle}`}>
                <span className='material-symbols-outlined'>{props.icon}</span>
                <p className='button-text'>{props.text}</p>
            </button>
        </a>

    );
};
