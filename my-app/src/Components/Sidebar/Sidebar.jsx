import React from "react";
import sidebar from "./Sidebar.module.css"

const Sidebar = () => {
    const title = "Sidebar"
    return(
        <div className={sidebar.sidebar}>
            <h2 className={sidebar.title}>{title}</h2>
        </div>
    )
}

export default Sidebar