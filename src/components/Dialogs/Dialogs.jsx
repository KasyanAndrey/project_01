import React from "react";
import css from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div className={css.dialogs}>
        <div className={css.dialogsList}>
          <div className={css.dialog}>Jax</div>
          <div className={css.dialog}>Mango</div>
          <div className={css.dialog}>Poli</div>
          <div className={css.dialog}>Ajax</div>
          <div className={css.dialog}>Baz</div>
          <div className={css.dialog}>Congo</div>
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
