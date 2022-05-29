import React, { useContext } from "react";
import { Pages } from '../../contexts/Pages.js';
import { CurrentPage } from '../../contexts/CurrentPage.js';
import './EditorHeader.css';

export default function EditorHeader(props) {
    const {pages, setPages} = useContext(Pages)
    const {currentPage, setCurrentPage} = useContext(CurrentPage)
    
    const editPage = () => {
        console.log('Edit Page Clicked')
    }

    const deletePage = () => {
        const newPages = [...pages]
        newPages.splice(currentPage, 1)
        setPages(newPages)

        if (currentPage > 0)
            setCurrentPage(currentPage-1) // TODO: need fix -> app crashes when you delete the last page
    }

    return (
        <div id="editor-header">
            <div id="page-title">
                <h1>{pages[currentPage].title}</h1>
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