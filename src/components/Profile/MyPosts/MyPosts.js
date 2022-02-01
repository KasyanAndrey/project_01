import React from "react";
import css from "./MyPosts.module.css";
import Post from './Post/Post.js';
;


const MyPosts = () => {
  return (
    <section className={css.container}>
      my post
      <div>
        <textarea> </textarea>
        <button>Add post</button>
      </div>
      <ul className={css.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>
    </section>
  );
};

export default MyPosts;
