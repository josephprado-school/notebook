import React from "react";
import "./HeaderButton.css";

export default function HeaderButton(props) {
    return (
        <button
            className={`header-button ${props.visibility} ${props.color}`}
            onClick={props.action}
            disabled={props.disabled}
        >{props.name}</button>
    )
}