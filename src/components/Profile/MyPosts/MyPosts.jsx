import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  return (
    <section className={css.container}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={css.posts}>
        <Post message="Hi, how are you?" liksCount="0" />
        <Post message="It is my first post!" liksCount="25" />
      </div>
    </section>
  );
};

export default MyPosts;
