import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Link to="/">
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>Contact Manager</h2>
        </div>
      </div>
    </Link>
  );
}
