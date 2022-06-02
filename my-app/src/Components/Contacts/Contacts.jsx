import React from "react";
import contacts from "./Contacts.module.css"

const Contacts = () => {
    const title = "Contacts"
    return(
        <div className={contacts.contacts}>
            <h2 className={contacts.contacts}>{title}</h2>
        </div>
    )
}

export default Contacts