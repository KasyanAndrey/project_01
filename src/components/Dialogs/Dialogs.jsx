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
  let dialogsData = [
    { id: 1, name: "Jax" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Poli" },
    { id: 4, name: "Ajax" },
    { id: 5, name: "Baz" },
    { id: 6, name: "Congo" },
  ];

  let messageData = [
    {
      id: 1,
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, minus.",
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, ullam nostrum!",
    },
  ];

  return (
    <div>
      <div className={css.dialogs}>
        <div className={css.dialogsList}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        </div>
        <div className={css.messagesList}>
          <Message message={messageData[0].message} id={messageData[0].id} />
          <Message message={messageData[1].message} id={messageData[1].id} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
