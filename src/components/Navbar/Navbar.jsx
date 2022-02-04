import React from "react";
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <a className={`${css.link} ${css.active}`} href="/profile">Profile</a>
      <a className={css.link} href="/dialogs">Messages</a>
      <a className={css.link} href="#s">News</a>
      <a className={css.link} href="#s">Music</a>
      <a className={css.link} href="#s">Settings</a>
    </nav>
  );
};

export default Navbar;
