import React, { createContext, useContext, useEffect } from "react";
import { Pages } from "./Pages";

export const StorageManager = createContext()

export function StorageManagerProvider(props) {
    const storePage = (page, index=localStorage.length-1) => {
        // add 1 to index because local storage contains dummy page in index 0 not present in pages
        localStorage.setItem(index+1, JSON.stringify(page))
    }

    const removePage = (index) => {
        // add 1 to index because local storage contains dummy page in index 0 not present in pages
        // left shift all stored pages and delete last page
        // this ensures stored index matches page index
        for (let i = index+1; i < localStorage.length-1; i++)
            localStorage.setItem(i, localStorage.getItem(i+1))

        localStorage.removeItem(localStorage.length-1)
    }

    const {setPages, welcomePage} = useContext(Pages)

    useEffect(() => {
        if (localStorage.length > 0) {
            const storedPages = []
    
            for (let i = 1; i < localStorage.length; i++)
                storedPages.push(JSON.parse(localStorage.getItem(i)))
    
            setPages(storedPages)
    
        } else {
            storePage({title: 'PAGES STORED', content: 'This page left blank intentionally.'})
            storePage(welcomePage)
            setPages([welcomePage])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StorageManager.Provider value={{storePage, removePage}}>
            {props.children}
        </StorageManager.Provider>
    )
}