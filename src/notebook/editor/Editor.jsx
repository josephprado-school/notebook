import React from "react";
import './Editor.css'
import EditorHeader from "./editor-header/EditorHeader";
import Toolbar from "./toolbar/Toolbar";

export default function Editor(props) {
    return (
        <div id="editor">
            <EditorHeader/>
            <Toolbar/>
            <div id="content-container">
                <textarea name="text-content" id="text-content"></textarea>
            </div>
        </div>
    )
}