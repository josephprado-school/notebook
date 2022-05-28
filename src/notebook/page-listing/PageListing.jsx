import React, { useContext } from "react";
import { Pages } from "../contexts/Pages";
import { CurrentPage } from "../contexts/CurrentPage";
import ListOfPages from "./list-of-pages/ListOfPages";
import './PageListing.css';

export default function PageListing(props) {
    const {pages, setPages} = useContext(Pages)
    const {setCurrentPage} = useContext(CurrentPage)
    const defaultPageName = 'Untitled'

    const createNewPage = () => {
        setPages([...pages, defaultPageName])
        setCurrentPage(pages.length) // for some reason, the array length is short by 1 ???
    }

    return (
        <div id="page-listing">
            <button id="create-new-page" onClick={createNewPage}>Create New Page</button>
            <ListOfPages/>
        </div>
    )
}