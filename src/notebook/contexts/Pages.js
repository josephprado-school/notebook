import React, { useState, createContext } from "react";

export const Pages = createContext()

export function PagesProvider(props) {
    const [pages, setPages] = useState([])

    return (
        <Pages.Provider value={{pages, setPages}}>
            {props.children}
        </Pages.Provider>
    )
}