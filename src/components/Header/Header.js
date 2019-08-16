import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.css";

const handleUserValidation = props => {
  if (props.user) return props.history.push(`/profile/${props.user.name}`);
  return props.history.push("/404");
};

const Header = props => (
  <header id="app-header">
    <h1>Facr</h1>
    <h4>A social place for devs.</h4>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => handleUserValidation(props)}>Profile</li>
      </ul>
    </nav>
  </header>
);

export default withRouter(Header);
