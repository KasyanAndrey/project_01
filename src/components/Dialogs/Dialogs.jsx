import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Jax" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Poli" },
    { id: 4, name: "Ajax" },
    { id: 5, name: "Baz" },
    { id: 6, name: "Congo" },
  ];

  let message = [
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

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div>
      <div className={css.dialogs}>
        <div className={css.dialogsList}>{dialogsElements}</div>
        <div className={css.messagesList}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
