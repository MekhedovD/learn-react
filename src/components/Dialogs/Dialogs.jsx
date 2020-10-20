import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dima" id="1" />
        <DialogItem name="Olya" id="2" />
        <DialogItem name="Sasha" id="3" />
        <DialogItem name="Valera" id="4" />
        <DialogItem name="Vika" id="5" />
        <DialogItem name="Ulya" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you" />
        <Message message="Ok" />
      </div>
    </div>
  );
};

export default Dialogs;
