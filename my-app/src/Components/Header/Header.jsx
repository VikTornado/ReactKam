import React from "react";
import header from "./Header.module.css"


const Header = () => {
    const title = "Header"
    return(
        <div className={header.header}>
            <h2 className={header.title}>{title}</h2>
        </div>
    )
}

export default Header