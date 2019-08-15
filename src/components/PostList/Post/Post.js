import React from "react";
//SECTION Internal Imports
import PostHeader from "./PostHeader/PostHeader";
import PostContent from "./PostContent/PostContent";
import "./Post.css";

class Post extends React.Component {
  state = {
    color: "white"
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
    const { color } = this.state;
    return (
      <article className="post" style={{ background: color }}>
        <PostHeader user={user} />
        <PostContent data={data} />
        <p>{color}</p>
        <button onClick={this.handleColorChange}>change color</button>
        {/* <Karma color={color} /> */}
      </article>
    );
  }
}

export default Post;
