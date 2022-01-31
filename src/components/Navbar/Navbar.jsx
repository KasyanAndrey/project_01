import React from "react";
import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <a href="#s">Profile</a>
      <a href="#s">Messages</a>
      <a href="#s">News</a>
      <a href="#s">Music</a>
      <a href="#s">Settings</a>
    </nav>
  );
};

export default Navbar;
