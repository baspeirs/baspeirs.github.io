import React from "react";

function EducationCard(props) {
    return (
        <div id="school">
            <h3>{props.school}</h3>
            <p>{props.term}</p>
            <p>{props.completion}</p>
        </div>
    )
}

export default EducationCard;