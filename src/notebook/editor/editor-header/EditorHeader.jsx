import React, { useContext } from "react";
import { Pages } from '../../contexts/Pages.js';
import { CurrentPage } from '../../contexts/CurrentPage.js';
import './EditorHeader.css';

export default function EditorHeader(props) {
    const {pages, setPages} = useContext(Pages)
    const {currentPage, setCurrentPage} = useContext(CurrentPage)

    return (
        <div id="editor-header">
            <div id="page-title">
                <h1>{pages[currentPage].title}</h1>
            </div>
            <button className="editor-button" id="edit-page">Edit Page</button>
            <button className="editor-button" id="delete-page">Delete Page</button>
        </div>
    )
}