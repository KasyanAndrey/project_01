import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let nuwMessageElement = React.createRef();

  let addMessage = () => {
    let text = nuwMessageElement.current.value;
    alert(text)
  }

  return (
    <div>
      <div className={css.dialogs}>
        <div className={css.dialogsList}>{dialogsElements}</div>
        <div className={css.messagesList}>{messagesElements}</div>
        <div>
          <div>
            <textarea ref={nuwMessageElement}></textarea>
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
