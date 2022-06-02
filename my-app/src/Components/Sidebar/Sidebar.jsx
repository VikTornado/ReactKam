import React from "react";
import sidebar from "./Sidebar.module.css"
import SidebarBlock from "./SidebarBlock/SidebarBlock";

const Sidebar = () => {
    const title = "Sidebar"
    return (
        <div className={sidebar.sidebar}>
            <h2 className={sidebar.title}>{title}</h2>
            <SidebarBlock/>
        </div>
    )
}

export default Sidebar