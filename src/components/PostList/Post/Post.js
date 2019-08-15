import React from "react";
//SECTION Internal Imports
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import PostInteraction from "./PostInteraction/PostInteraction";

import "./Post.css";

class Post extends React.Component {
  state = {
    color: "white",
    liked: false
  };

  handlePostLike = () => {
    this.setState({ liked: !this.state.liked });
  };

  handleColorChange = () => {
    const color = `rgb(${Math.floor(Math.random() * 255, 255)},${Math.floor(
      Math.random() * 255,
      255
    )},${Math.floor(Math.random() * 255, 255)})`;

    this.setState({ color: color });
  };

  render() {
    const { data, user } = this.props.post;
    const { color, liked } = this.state;
    return (
      <article className="post" style={{ background: color }}>
        <PostHeader user={user} />
        <PostContent data={data} />
        <PostInteraction
          color={color}
          handleColorChange={this.handleColorChange}
          handlePostLike={this.handlePostLike}
          liked={liked}
        />
      </article>
    );
  }
}

export default Post;
