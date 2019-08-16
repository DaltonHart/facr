import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => (
  <header id="app-header">
    <h1>Facr</h1>
    <h4>A social place for devs.</h4>
    <nav>
      <Link to="/">Home</Link>
      <Link to={`/profile/${props.user.name}`}>Profile</Link>
    </nav>
  </header>
);

export default Header;
