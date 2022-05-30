import React, { useContext } from "react";
import { Pages } from "../contexts/Pages";
import { CurrentPage } from "../contexts/CurrentPage";
import PageListItem from "./page-list-item/PageListItem";
import "./PageListing.css";

export default function PageListing(props) {
    const {pages, setPages, emptyPage} = useContext(Pages)
    const {setCurrentPage} = useContext(CurrentPage)

    const createNewPage = () => {
        setPages([...pages, emptyPage])
        setCurrentPage(pages.length) // for some reason, the array length is short by 1 ???
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