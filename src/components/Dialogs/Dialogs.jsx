import React from "react";
import css from "./Dialogs.module.css";
import imgAvatar from "../../assets/img/default_avatar.png";

const Dialogs = (props) => {
  return (
    <div>
      <div className={css.dialogs}>
        <div className={css.dialogsList}>
          <div className={`${css.activeLink} ${css.dialog}`}>
            <img src={imgAvatar} alt="user avatar"></img>
            Jax
          </div>
          <div className={css.dialog}>
            <img src={imgAvatar} alt="user avatar"></img>
            Mango
          </div>
          <div className={css.dialog}>
            <img src={imgAvatar} alt="user avatar"></img>
            Poli
          </div>
          <div className={css.dialog}>
            <img src={imgAvatar} alt="user avatar"></img>
            Ajax
          </div>
          <div className={css.dialog}>
            <img src={imgAvatar} alt="user avatar"></img>
            Baz
          </div>
          <div className={css.dialog}>
            <img src={imgAvatar} alt="user avatar"></img>
            Congo
          </div>
        </div>
        <div className={css.messagesList}>
          <div className={css.message}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            repellat error reprehenderit nam consequuntur doloremque.
          </div>
          <div className={css.message}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi!
          </div>
          <div className={css.message}>
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
