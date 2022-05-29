import React, { useContext, useState, useEffect } from "react";
import { Pages } from '../../contexts/Pages.js';
import { CurrentPage } from '../../contexts/CurrentPage.js';
import EditorButton from "./editor-button/EditorButton.jsx";
import './EditorHeader.css';

export default function EditorHeader(props) {
    const {pages, setPages} = useContext(Pages)
    const {currentPage, setCurrentPage} = useContext(CurrentPage)
    
    const pageExists = pages.length > 0
    const title = pageExists ? pages[currentPage].title : ""

    const [newTitle, setNewTitle] = useState(title)
    const [editingTitle, setEditingTitle] = useState(false)

    const visibleIf = active => active ? null : 'hidden'

    const deletePage = () => {
        if (pageExists) {
            const newPages = [...pages]
            newPages.splice(currentPage, 1)
            setPages(newPages)
            setCurrentPage(Math.max(0, currentPage-1))
        }
    }

    const comfirm = () => {
        const newPages = [...pages]
        newPages[currentPage].title = newTitle
        setPages(newPages)
        setEditingTitle(false)
    }

    const cancel = () => {
        setEditingTitle(false)
        setNewTitle(title)
    }

    // not sure why title needs to be in the array but excluding it was causing an error
    // "React Hook useEffect has a missing dependency: 'title'. Either include it or remove the dependency array"
    useEffect(cancel, [currentPage, title])

    return (
        <div id="editor-header">
            <div id="page-title">
                <h1 className={visibleIf(!editingTitle)}>{title}</h1>
                <input
                    className={visibleIf(editingTitle)}
                    type="text"
                    id="edit-page-title"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                />
            </div>

            <EditorButton
                visibility={visibleIf(!editingTitle)}
                name='Edit Page'
                action={() => setEditingTitle(true)}
                disabled={!pageExists}
            />

            <EditorButton
                visibility={visibleIf(!editingTitle)}
                name='Delete Page'
                action={deletePage}
                disabled={!pageExists}
            />

            <EditorButton
                visibility={visibleIf(editingTitle)}
                name='Confirm'
                action={comfirm}
                color='green'
            />

            <EditorButton
                visibility={visibleIf(editingTitle)}
                name='Cancel'
                action={cancel}
                color='red'
            />
        </div>
    )
}