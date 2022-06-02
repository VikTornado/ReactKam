import React from "react";
import home from "./Home2.module.css"
import {NavLink} from "react-router-dom";

const Home2 = (props) => {
    // console.log(Home2)
    return (
            <div className={home.wrapper}>
                <div>
                    <NavLink to={"/" + props.id}>{props.name}</NavLink>
                </div>
            </div>

    )
}

export default Home2