import React, { useContext } from "react";
import { Pages } from "../contexts/Pages";
import { CurrentPage } from "../contexts/CurrentPage";
import EditorHeader from "./editor-header/EditorHeader";
import Toolbar from "./toolbar/Toolbar";
import "./Editor.css";

export default function Editor(props) {
    const {pages, setPages} = useContext(Pages)
    const {currentPage} = useContext(CurrentPage)

    const pageExists = (pages.length > 0)
    const content = pageExists ? pages[currentPage].content : ""

    const textConentChange = (newContent) => {
        if (pageExists) {
            const newPages = [...pages]
            newPages[currentPage].content = newContent
            setPages(newPages)
        }
    }

    return (
        <div id="editor">
            <EditorHeader/>
            <Toolbar/>
            <div id="content-container">
                <textarea 
                    name="text-content"
                    id="text-content"
                    value={content}
                    onChange={e => textConentChange(e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}