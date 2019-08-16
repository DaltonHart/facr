import React from "react";
import PostList from "../PostList/PostList";
const Profile = props => {
  return (
    <div id="profile">
      <h4>{props.match.params.name}</h4>
      <PostList name={props.match.params.name} />
    </div>
  );
};

export default Profile;
