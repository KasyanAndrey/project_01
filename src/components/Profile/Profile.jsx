import React from "react";
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';


const Profile = () => {
  return (
    <section className={css.content}>
      <div>ava + description</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
