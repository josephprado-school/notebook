import React from "react";
import PageListing from "./page-listing/PageListing";
import Editor from "./editor/Editor";
import './Notebook.css'

export default function Notebook() {
    return (
        <main>
            <PageListing/>
            <Editor/>
        </main>
    )
}