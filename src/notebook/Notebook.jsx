import React from "react";
import { PagesProvider } from "./contexts/Pages";
import { CurrentPageProvider } from "./contexts/CurrentPage";
import PageListing from "./page-listing/PageListing";
import Editor from "./editor/Editor";
import "./Notebook.css";

export default function Notebook() {
    return (
        <main>
            <PagesProvider>
                <CurrentPageProvider>
                    <PageListing/>
                    <Editor/>
                </CurrentPageProvider>
            </PagesProvider>
        </main>
    )
}