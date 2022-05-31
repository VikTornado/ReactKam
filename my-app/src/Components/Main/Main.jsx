import React from "react";
import main from "./Main.module.css"

const Main = () => {
    const title = "Main"
    return(
        <div className={main.main}>
            <h2 className={main.title}>{title}</h2>
        </div>
    )
}

export default Main