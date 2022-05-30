import React, { useContext, useState, useEffect } from "react";
import { Pages } from "../../contexts/Pages.js";
import { CurrentPage } from "../../contexts/CurrentPage.js";
import { StorageManager } from "../../contexts/StorageManager.js";
import HeaderButton from "./header-button/HeaderButton.jsx";
import "./Header.css";

export default function Header(props) {
    const {pages, setPages} = useContext(Pages)
    const {currentPage, setCurrentPage} = useContext(CurrentPage)
    const {storePage, removePage} = useContext(StorageManager)
    
    const pageExists = pages.length > 0
    const title = pageExists ? pages[currentPage].title : ""

    const [newTitle, setNewTitle] = useState(title)
    const [editingTitle, setEditingTitle] = useState(false)
    const [deleteClicked, setDeleteClicked] = useState(false)

    const visibleIf = active => active ? null : 'hidden'

    const editPage = () => {
        // for some reason, newTitle doesn't get initialized to title with useState(title) above,
        // so had to set it here becuase it was causing the text input to be blank on first click
        // of edit page button after refresh
        setNewTitle(title)
        setEditingTitle(true)
    }

    const deletePage = () => {
        if (!deleteClicked) {
            setDeleteClicked(true)
            alert('Are you sure? Click OK and then click "Delete Page" once more to proceed.')

        } else {
            removePage(currentPage)

            const newPages = [...pages]
            newPages.splice(currentPage, 1)
            setPages(newPages)
            setCurrentPage(Math.max(0, currentPage-1))
            setDeleteClicked(false)
        }
    }

    const comfirm = () => {
        const newPages = [...pages]
        newPages[currentPage].title = newTitle
        setPages(newPages)
        setEditingTitle(false)

        storePage(newPages[currentPage], currentPage)
    }

    const cancel = () => {
        setEditingTitle(false)
        setNewTitle(title)
        setDeleteClicked(false)
    }

    /*
        not sure why the useEffects below throw warnings: "React Hook useEffect has a missing dependency..."
        I disabled the warning per:
        https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
    */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(cancel, [currentPage])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { if (deleteClicked) setDeleteClicked(false) }, [pages])

    return (
        <div id="header">
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

            <HeaderButton
                visibility={visibleIf(!editingTitle)}
                name='Edit Page'
                action={editPage}
                disabled={!pageExists}
            />

            <HeaderButton
                visibility={visibleIf(!editingTitle)}
                name='Delete Page'
                action={deletePage}
                disabled={!pageExists}
                color={deleteClicked ? 'red' : null}
            />

            <HeaderButton
                visibility={visibleIf(editingTitle)}
                name='Confirm'
                action={comfirm}
                color='green'
            />

            <HeaderButton
                visibility={visibleIf(editingTitle)}
                name='Cancel'
                action={cancel}
                color='red'
            />
        </div>
    )
}