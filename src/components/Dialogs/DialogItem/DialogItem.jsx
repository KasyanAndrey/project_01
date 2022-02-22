import React from "react";
import { NavLink } from "react-router-dom";
import AvatarImg from '../../AvatarImg/AvatarImg.jsx'
import css from "./DialogItem.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${css.activeLink} ${css.dialog}`}>
      <AvatarImg />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
