import React from "react";

function WorkHistoryCard(props) {
    return (
        <div id="work">
            <h3>{props.employer}</h3>
            <p>{props.title}</p>
            <p>{props.term}</p>
        </div>
    )
}

export default WorkHistoryCard;