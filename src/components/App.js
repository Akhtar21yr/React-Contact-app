import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import api from '../api/contacts'

function App() {
  const LSK = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  // retrive contacts data
  const retriveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data;
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      // console.log(allContacts)
      if (allContacts) setContacts(allContacts[0])
    };
  getAllContacts();
  },[])

  
  return (
    <Router>
      <div className="ui container">
        <Header />
        <Routes>
          <Route path="/contact/:id" Component={ContactDetails} />

          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />

          <Route
            path="/"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
