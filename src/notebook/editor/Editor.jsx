import React, { useContext, useState} from "react";
import { Pages } from "../contexts/Pages";
import { CurrentPage } from "../contexts/CurrentPage";
import { StorageManager } from "../contexts/StorageManager";
import Header from "./header/Header";
import "./Editor.css";

export default function Editor(props) {
    const {pages, setPages} = useContext(Pages)
    const {currentPage} = useContext(CurrentPage)
    const {storePage} = useContext(StorageManager)

    const pageExists = (pages.length > 0)
    const content = pageExists ? pages[currentPage].content : ""
    
    const [debouncer, setDebouncer] = useState()
    
    const startDebouncer = () => {
        clearTimeout(debouncer)

        setDebouncer( 
            setTimeout(() => {
                storePage(pages[currentPage], currentPage)
            }, 500)
        )
    }

    const textConentChange = (newContent) => {
        if (pageExists) {
            const newPages = [...pages]
            newPages[currentPage].content = newContent
            setPages(newPages)

            startDebouncer()
        }
    }

    return (
        <div id="editor">
            <Header/>
            <div id="content-container">
                <textarea 
                    name="text-content"
                    id="text-content"
                    value={content}
                    onChange={e => textConentChange(e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}