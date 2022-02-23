import React from "react";
import css from "./Post.module.css";
import AvatarImg from '../../../AvatarImg/AvatarImg.jsx'

const Post = (props) => {
  return (
    <div className={css.post}>
      <AvatarImg />
      <p>{props.message}</p>
      <div className={css.like}>Like: {props.likesCount}</div>
    </div>
  );
};

export default Post;
