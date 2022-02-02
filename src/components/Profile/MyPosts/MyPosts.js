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
        <Post message='Hi, how are you?' grade='8'/>
        <Post message='It is my first post!'grade='25'/>
      </ul>
    </section>
  );
};

export default MyPosts;
