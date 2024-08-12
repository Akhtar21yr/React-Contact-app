import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList(props) {
    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contacts={contact} clickHandler={deleteContactHandler}  />
        )
    })
  return (
    <div className='ui celled list' >
        {renderContactList}
    </div>
  )
}
