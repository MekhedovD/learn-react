import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUfQcvjHXO0Xr8vxOxOs1IYQcKgI9kWi8XOw&usqp=CAU'/>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
