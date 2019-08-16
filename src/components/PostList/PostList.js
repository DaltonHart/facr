import React from "react";
//SECTION Internal Components
import Post from "./Post/Post";

//SECTION Styles
import "./PostList.css";

// SECTION DB
import postsDB from "./post.json";

class PostList extends React.Component {
  state = {
    posts: postsDB
  };

  displayPosts = posts => {
    if (this.props.name) {
      posts = posts.filter(post => {
        return post.user.name === this.props.name;
      });
    }
    // loop through posts
    return posts.map(postData => {
      // for every post create a post component
      // pass post data as props
      return <Post key={postData._id} post={postData} />;
    });
  };

  render() {
    return (
      <section id="post-list">{this.displayPosts(this.state.posts)}</section>
    );
  }
}

export default PostList;
