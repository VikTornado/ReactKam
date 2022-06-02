import React from "react";
import home from "./Home.module.css"
import Home2 from "./Home2/Home2";

const Home = (props) => {
    console.log(props)
    const title = "Home"
    const userConst = props.userName.map(person => <Home2 name={person.props.name} id={person.props.id}/>)
    const userMassegeNew = props.userMessage.map(m => <Home2 name={m.props.name} id={m.props.id}/>)
    return (
        <div className={home.home}>
            <h2 className={home.title}>{title}</h2>
            <div className={home.wrapper}>
                <div>
                    {userConst}
                </div>
                <div>
                    {userMassegeNew}
                </div>
            </div>
        </div>
    )
}

export default Home