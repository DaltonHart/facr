import React from "react";
import { Switch, Route } from "react-router-dom";
//SECTION Internal Components
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";

//SECTION  styles
import "./App.css";

function App() {
  return (
    <>
      <Header user={{ name: "Dalton" }} />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/profile/:name" component={Profile} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
