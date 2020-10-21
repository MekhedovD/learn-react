import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friends.module.css";

const Friends = () => {
  return (
      <div className={s.item}>
        <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
      </div>
  );
};

export default Friends;

// <nav className={s.nav}>
//
//     <div className={s.item}>
//       <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
//     </div>
//     <div className={s.item}>
//       <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
//     </div>
//     <div className={s.item}>
//       <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
//     </div>
//     <div className={s.item}>
//       <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
//     </div>
//   </nav>
