import React, { useContext } from "react";
import { Pages } from '../../contexts/Pages.js';
import { CurrentPage } from '../../contexts/CurrentPage.js';
import './EditorHeader.css';

export default function EditorHeader(props) {
    const {pages, setPages} = useContext(Pages)
    const {currentPage, setCurrentPage} = useContext(CurrentPage)

    const pageExists = (pages.length > 0)
    const title = pageExists ? pages[currentPage].title : ""
    
    const editPage = () => {
        console.log('Edit Page Clicked')
    }

    const deletePage = () => {
        if (pageExists) {
            const newPages = [...pages]
            newPages.splice(currentPage, 1)
            setPages(newPages)
            setCurrentPage(Math.max(0, currentPage-1))
        }
    }

    return (
        <div id="editor-header">
            <div id="page-title">
                <h1>{title}</h1>
            </div>
            
            <button
                className="editor-button"
                id="edit-page"
                onClick={editPage}
            >Edit Page</button>

            <button
                className="editor-button"
                id="delete-page"
                onClick={deletePage}
            >Delete Page</button>
        </div>
    )
}