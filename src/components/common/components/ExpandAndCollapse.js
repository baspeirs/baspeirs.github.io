import React, { useState, useEffect } from 'react';
import '../styles/ExpandAndCollapse.css'

export const ExpandAndCollapse = (props) => {
    // a text of 'any text you want really' 
    // a type of 'expand' or 'collapse'
    // a function to update state of the parent component

    const [buttonState, setButtonState] = useState({
        icon: ''
    });

    useEffect(() => {
        setButtonState({
            icon: props.type === 'expand'
                ? 'add'
                : 'remove'
        })
    }, [props.visible, props.type]);

    return (
        <button className={`expand-collapse-button`} onClick={props.toggle}>
            <span class="material-symbols-outlined">
                {buttonState.icon}
            </span>
            <p>{props.text}</p>
        </button>
    )
};
