import React from "react";
import PostList from "../PostList/PostList";

const Profile = props => {
  return (
    <div id="profile">
      <h4>{props.name}</h4>
      {/* post list of just user posts */}
      <PostList name={props.name} />
    </div>
  );
};

export default Profile;
