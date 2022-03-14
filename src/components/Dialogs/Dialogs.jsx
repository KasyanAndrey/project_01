import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };
  
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  // debugger;

  return (
    <div>
      <div className={css.dialogs}>
        <div className={css.dialogsList}>{dialogsElements}</div>
        <div className={css.messagesList}>{messagesElements}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              ref={newMessageElement}
              value={props.dialogsPage.newMessageText}
            />
          </div>
          <div>
            <button onClick={addMessage}>Add message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
