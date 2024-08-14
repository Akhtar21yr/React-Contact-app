import React from "react";
import { Link, useLocation } from "react-router-dom";
import usr from "../images/profile2.png";

export default function ContactDetails() {
    const location = useLocation();
    const { name, email } = location.state.contact;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={usr} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui center grid" style={{marginTop:'2px'}} >
                <Link to='/'>
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
}
