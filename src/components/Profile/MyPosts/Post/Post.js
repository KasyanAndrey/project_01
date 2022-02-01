import React from "react";
import css from "./Post.module.css";
import imgAvatar from "../../../../assets/img/default_avatar.png";
const Post = () => {
    return (
        <div className={css.post}>
            <img src={imgAvatar} alt="user avatar"></img>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at
                est sed nulla hendrerit ultricies...
            </p>
            <div className={css.like}>Like</div>
        </div>
    );
};

export default Post;
