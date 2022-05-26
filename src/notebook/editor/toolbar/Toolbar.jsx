import React from "react";
import './Toolbar.css'

export default function Toolbar(props) {
    return (
        <div id="toolbar">
            <button class="format-button">Alignment</button>
            <button class="format-button">Font</button>
            <button class="format-button">Font Size</button>
            <button class="format-button">Font Color</button>
            <button class="format-button">Bold</button>
            <button class="format-button">Italic</button>
            <button class="format-button">Underline</button>
        </div>
    )
}