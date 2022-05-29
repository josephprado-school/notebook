import React from "react";
import "./EditorButton.css";

export default function EditorButton(props) {
    return (
        <button
            className={`editor-button ${props.visibility} ${props.color}`}
            onClick={props.action}
            disabled={props.disabled}
        >{props.name}</button>
    )
}