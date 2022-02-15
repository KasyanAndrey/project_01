import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = ({posts}) => {
  let postsElement = posts.map((p) => (
    <Post message={p.message} liksCount={p.liksCount} />
  ));

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
      <div className={css.posts}>{postsElement}</div>
    </section>
  );
};

export default MyPosts;
