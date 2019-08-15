import React from "react";
import "./PostContent.css";
const PostContent = props => {
  const { content, image } = props.data;
  return (
    <section className="post-content">
      {content && <p>{content}</p>}
      {image && <img src={image} alt="post" />}
    </section>
  );
};

export default PostContent;
