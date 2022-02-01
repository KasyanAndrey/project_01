import React from "react";
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <a href="#s" className={css.logo}><span>network</span></a>
    </header>
  );
};

export default Header;
