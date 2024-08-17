import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import api from '../api/contacts';
import EditContact from "./EditContacts";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]); // Add new contact to state
  };

  // Updated this function to correctly update the contact in state
  const updateContactHandler = async (id, contact) => {
    const response = await api.put(`contacts/${id}`, contact);
    const updatedContact = response.data;

    // Update the contact in state without creating duplicates
    setContacts(contacts.map(c => (c.id === id ? updatedContact : c)));
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    setContacts(contacts.filter(obj => obj.id !== id)); // Remove the contact from state
  };

  // Retrieve contacts data from API
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts); // Set contacts state with retrieved data
    };
    getAllContacts();
  }, []);

  return (
    <Router>
      <div className="ui container">
        <Header />
        <Routes>
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit/:id" element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
