import React from "react";
import "./Toolbar.css";

export default function Toolbar(props) {
    return (
        <div id="toolbar">
            <button className="format-button">Alignment</button>
            <button className="format-button">Font</button>
            <button className="format-button">Font Size</button>
            <button className="format-button">Font Color</button>
            <button className="format-button">Bold</button>
            <button className="format-button">Italic</button>
            <button className="format-button">Underline</button>
        </div>
    )
}