import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' activeClassName={s.activeLink}>Message</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <Friends />
      </nav>
  )
}

export default Navbar;