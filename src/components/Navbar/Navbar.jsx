import React from "react";
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <a className={`${css.link} ${css.active}`} href="/profile">Profile</a>
      <a className={css.link} href="/dialogs">Messages</a>
      <a className={css.link} href="/news">News</a>
      <a className={css.link} href="/music">Music</a>
      <a className={css.link} href="/settings">Settings</a>
    </nav>
  );
};

export default Navbar;
