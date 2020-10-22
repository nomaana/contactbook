import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/">
          Contact Book
        </NavLink>
      </div>
      <div>
        <NavLink className="btn btn-light ml-auto" exact to="/contacts/add">
          Create Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
