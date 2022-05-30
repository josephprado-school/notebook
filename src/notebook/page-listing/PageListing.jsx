import React, { useContext } from "react";
import { Pages } from "../contexts/Pages";
import { CurrentPage } from "../contexts/CurrentPage";
import { StorageManager } from "../contexts/StorageManager";
import PageListItem from "./page-list-item/PageListItem";
import "./PageListing.css";

export default function PageListing(props) {
    const {pages, setPages, emptyPage} = useContext(Pages)
    const {setCurrentPage} = useContext(CurrentPage)
    const {storePage} = useContext(StorageManager)

    const createNewPage = () => {
        setPages([...pages, emptyPage])

        // for some reason, pages and pages.length is not updated immediately
        // so new current page becomes length instead of length-1
        setCurrentPage(pages.length)

        storePage(emptyPage)
    }

    return (
        <div id="page-listing">
            <button id="new-page" onClick={createNewPage}>New Page</button>

            <ul>
                {pages.map( (page, i) => <PageListItem pageIndex={i} page={page}/>)}
            </ul>
        </div>
    )
}