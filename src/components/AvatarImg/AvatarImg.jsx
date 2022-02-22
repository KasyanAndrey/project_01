import React from "react";
import imgAvatar from "../../assets/img/default_avatar.png";

const AvatarImg = (props) => {
  return (
    <div>
      <img src={imgAvatar} alt="user avatar"></img>
    </div>
  );
};

export default AvatarImg;