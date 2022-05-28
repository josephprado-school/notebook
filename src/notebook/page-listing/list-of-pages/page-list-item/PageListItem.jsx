import React, { useContext } from "react";
import { CurrentPage } from "../../../contexts/CurrentPage";
import './PageListItem.css';

export default function PageListItem(props) {
    const {currentPage} = useContext(CurrentPage)
    const highlight = (props.pageNum === currentPage) ? 'highlight' : 'no-highlight';

    return (
        <div className="page-list-item">
            {/* TODO:
                "Warning: Each child in a list should have a unique "key" prop."
                Component is rendering twice, I think due to React.StrictMode.
                Might not have to worry about this, as I think this only happpens in
                development???
            */}
            <li key={props.pageNum} className={highlight}>{props.page}</li>
        </div>
    )
}