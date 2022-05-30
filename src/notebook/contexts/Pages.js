import React, { useState, createContext } from "react";

export const Pages = createContext()

export function PagesProvider(props) {
    const welcomePage = {
        title: 'Welcome to TwoNote',
        content: 'Welcome to TwoNote. It\'s like OneNote but twice as good!'
                 + '\n\nHere are some quick tips:\n'
                 + '\n- Use the "Edit Page" button at that top of the screen to change the current page\'s title'
                 + '\n- Use the "Delete Page" button to delete the current page'
                 + '\n- On the left is a list of pages. Click on a page title to view it in the editor'
                 + '\n- Use the "New Page" button to create a new blank page'
    }
    const emptyPage = { title: 'Untitled', content: '' }

    const [pages, setPages] = useState([welcomePage])

    return (
        <Pages.Provider value={{pages, setPages, welcomePage, emptyPage}}>
            {props.children}
        </Pages.Provider>
    )
}