import React from "react";
import './EditorHeader.css'

export default function EditorHeader(props) {
    return (
        <div id="editor-header">
            <div id="page-title">
                <h1>Page Title</h1>
            </div>
            <button class="editor-button" id="edit-page">Edit Page</button>
            <button class="editor-button" id="delete-page">Delete Page</button>
        </div>
    )
}