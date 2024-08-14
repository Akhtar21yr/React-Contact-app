import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const LSK = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LSK)) ?? []
  );

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LSK, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Router>
      <div className="ui container">
        <Header />
        <Routes>
          
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />

          <Route
            path="/"
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
