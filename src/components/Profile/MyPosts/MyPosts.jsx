import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = () => {
  let postData = [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, minus.",
      liksCount: 12,
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, ullam nostrum!",
      liksCount: 21,
    },
  ];
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
        <Post message={postData[0].message} liksCount={postData[0].liksCount} />
        <Post message={postData[1].message} liksCount={postData[1].liksCount} />
      </div>
    </section>
  );
};

export default MyPosts;
