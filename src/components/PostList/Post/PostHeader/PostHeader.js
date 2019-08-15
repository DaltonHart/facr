import React from "react";

const PostHeader = props => {
  const { image, name } = props.user;
  return (
    <header>
      <img src={image} alt="avatar" />
      <p>{name}</p>
    </header>
  );
};

export default PostHeader;
