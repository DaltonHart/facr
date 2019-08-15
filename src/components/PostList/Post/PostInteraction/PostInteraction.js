import React from "react";

const PostInteraction = props => {
  const { color, handleColorChange, handlePostLike, liked } = props;
  console.log(liked);
  return (
    <>
      <p>{color}</p>
      <button onClick={handleColorChange}>change color</button>
      <button
        style={{ background: `${liked ? "blue" : "white"}` }}
        onClick={handlePostLike}
      >
        Like
      </button>
    </>
  );
};
export default PostInteraction;
