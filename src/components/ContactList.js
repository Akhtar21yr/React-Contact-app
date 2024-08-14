import React from "react";
import {Link} from 'react-router-dom'
import ContactCard from "./ContactCard";

export default function ContactList(props) {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contacts={contact} clickHandler={deleteContactHandler} />
        );
    });
    return (
        <div className="main ">
            <h2>
                Contact list
                <Link to='/add' >
                    <button className="ui button blue right" style={{float:'right'}}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui  celled list" >{renderContactList}</div>
        </div>
    );
}
