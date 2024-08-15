import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const EditContact = ({ updateContactHandler }) => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("All fields are required");
            return;
        }
        updateContactHandler(id,{ name, email });
        setName("");
        setEmail("");
        navigate("/");
    };

    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    );
};

export default EditContact;
