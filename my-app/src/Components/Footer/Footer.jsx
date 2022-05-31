import React from "react";
import header from "../Header/Header.module.css"
import footer from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={footer.footer}>
            <h2 className={footer.title}>Footer</h2>
        </div>
    )
}

export default Footer