import React from "react";
import { PagesProvider } from "./contexts/Pages";
import { CurrentPageProvider } from "./contexts/CurrentPage";
import { StorageManagerProvider } from "./contexts/StorageManager";
import PageListing from "./page-listing/PageListing";
import Editor from "./editor/Editor";
import "./Notebook.css";

export default function Notebook() {
    return (
        <main>
            <PagesProvider>
                <CurrentPageProvider>
                    <StorageManagerProvider>
                        <PageListing/>
                        <Editor/>
                    </StorageManagerProvider>
                </CurrentPageProvider>
            </PagesProvider>
        </main>
    )
}