import React from "react";
import "./Header.css";

const Header = props => (
  <header id="app-header">
    <h1>Facr</h1>
    <h4>A social place for devs.</h4>
    <p>Welcome, {props.user.name}</p>
  </header>
);

export default Header;
