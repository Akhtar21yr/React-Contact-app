import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList(props) {
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    };
    const contacts = [{
        id : "1",
        name : "akhtar",
        email : "akhtar.decy@gmail.com"

    }]
    const renderContactList =contacts.map((contact) => {
        return (
            <ContactCard contacts={contact} clickHandler={deleteContactHandler}  />
        )
    })
  return (
    <div className='ui  celled list' style={{marginTop:'3rem'}} >
        {renderContactList}
    </div>
  )
}
