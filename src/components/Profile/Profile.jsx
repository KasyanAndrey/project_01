import React from "react";
// import css from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = () => {
  let posts = [
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
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
