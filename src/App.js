import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//SECTION Internal Components
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";

//SECTION  styles
import "./App.css";

function App() {
  return (
    <Router>
      <Header user={{ name: "Dalton", age: "I will never tell" }} />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route
          path="/profile/:name"
          render={props => <Profile name={props.match.params.name} />}
        />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
