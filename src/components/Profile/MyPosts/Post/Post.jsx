import React from "react";
import css from "./Post.module.css";
import imgAvatar from "../../../../assets/img/default_avatar.png";

const Post = (props) => {
  return (
    <div className={css.post}>
      <img src={imgAvatar} alt="user avatar"></img>
      <p>{props.message}</p>
      <div className={css.like}>Like: {props.liksCount}</div>
    </div>
  );
};

export default Post;
