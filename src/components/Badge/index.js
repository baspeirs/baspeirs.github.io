import React from "react";
import "./style.css";

function Badge(props) {
    return (
        <div>
            <p className="skillSymbol">&lt;/&gt;</p>
            <p className="skill">{props.skill}</p>
        </div>
    )
}

export default Badge;