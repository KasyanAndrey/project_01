import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${css.activeLink} ${css.dialog}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={css.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div>
      <div className={css.dialogs}>
        <div className={css.dialogsList}>
          <DialogItem name="Jax" id="1" />
          <DialogItem name="Mango" id="2" />
          <DialogItem name="Poli" id="3" />
          <DialogItem name="Ajax" id="4" />
          <DialogItem name="Baz" id="5" />
          <DialogItem name="Congo" id="6" />
        </div>
        <div className={css.messagesList}>
          <Message
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            repellat error reprehenderit nam consequuntur doloremque."
          />
          <Message message="Lorem ipsum dolor sit amet consectetur." />
          <Message
            message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi!"
          />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
