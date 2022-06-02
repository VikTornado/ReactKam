import React from "react";
import sidebarBlock from "./SidebarBlock.module.css"
import {NavLink} from "react-router-dom";


const SidebarBlock = () => {
    // const title = "SidebarBlock"
    const titleName = {
        name: [
            {name: "Home"},
            {name: "Main"},
            {name: "Contains"},
            {name: "Page"}
        ]
    }
    return(
            <div className={sidebarBlock.listBlock}>
                <ul className={sidebarBlock.list}>
                    <NavLink to={"/home"} className={sidebarBlock.item}>{titleName.name[0].name}</NavLink>
                    <NavLink to={"/main"} className={sidebarBlock.item}>{titleName.name[1].name}</NavLink>
                    <NavLink to={"/main"} className={sidebarBlock.item}>{titleName.name[2].name}</NavLink>
                    <NavLink to={"/main"} className={sidebarBlock.item}>{titleName.name[3].name}</NavLink>
                </ul>
            </div>
    )
}

export default SidebarBlock