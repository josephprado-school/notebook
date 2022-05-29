import React, { useContext } from "react";
import { Pages } from "../../contexts/Pages";
import PageListItem from "./page-list-item/PageListItem";
import './ListOfPages.css';

export default function ListOfPages(props) {
    const {pages} = useContext(Pages)

    return (
        <div id="list-of-pages">
            <ul>
                {pages.map( (page, i) => <PageListItem pageIndex={i} page={page}/>)}
            </ul>
        </div>
    )
}