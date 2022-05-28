import React, { useState, createContext } from "react";

export const CurrentPage = createContext()

export function CurrentPageProvider(props) {
    const [currentPage, setCurrentPage] = useState(0)

    return (
        <CurrentPage.Provider value={{currentPage, setCurrentPage}}>
            {props.children}
        </CurrentPage.Provider>
    )
}