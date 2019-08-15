import React from "react";

//SECTION Internal Components
import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";

//SECTION  styles
import "./App.css";

function App() {
  return (
    <>
      <Header user={{ name: "Dalton", age: "I will never tell" }} />
      <PostList />
    </>
  );
}

export default App;
