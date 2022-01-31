import React from "react";
import css from './Profile.module.css';

const Profile = () => {
  return (
    <div className={css.content}>
      <div>
        <img className={css.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStv6WMM5iYyZPirC-yhlhyLpBhMyL5VrS37g&usqp=CAU" />
      </div>
      <div>ava + description</div>
      <div>
        my post
        <div>new post</div>
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  );
};

export default Profile;
