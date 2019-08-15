import React from "react";

const PostContent = props => {
  const { content } = props.data;
  return (
    <section className="post-content">
      <p>{content}</p>
    </section>
  );
};

export default PostContent;
