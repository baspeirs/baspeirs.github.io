import React from "react";
import '../styles/ExpInfoCard.css'

export const ExpInfoCard = (props) => {
    return (
        <div className='exp-info-card'>
            <h4>{props.term}</h4>
            <h3 className='exp-title'>{props.title}</h3>
            <p>{props.info}</p>
        </div>
    )
};
