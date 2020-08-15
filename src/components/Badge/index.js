import React from "react";
import "./style.css";

function Badge(props) {
    return(
        <span class="badge badge-light">{props.skill}</span>
    )
}

export default Badge;