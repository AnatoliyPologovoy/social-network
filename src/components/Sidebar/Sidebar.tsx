import React from "react";
import cl from "./sidebar.module.css";

// type clType =

type DataType = {
    data? : any
}

export const Sidebar: React.FC<DataType> = (props) => {
    return (
        <div className={cl.sidebar}>
            <ul>
                <li><a href="src/components/Sidebar/Sidebar#">Home</a></li>
                <li><a href="src/components/Sidebar/Sidebar#">News Feed</a></li>
                <li><a href="src/components/Sidebar/Sidebar#">Message</a></li>
            </ul>
        </div>
    )
}