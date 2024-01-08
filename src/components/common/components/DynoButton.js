import React from "react";
import '../styles/DynoButton.css';

export const DynoButton = (props) => {

    return (
        <a href={`${props.link}`} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
            <button className={`dyno-button ${props.buttonSize} ${props.buttonStyle}`}>
                <span class='material-symbols-outlined'>{props.icon}</span>
                <p className='button-text'>{props.text}</p>
            </button>
        </a>

    );
};
