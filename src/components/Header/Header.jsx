import React from "react";
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <img className={css.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwHutRUgBD1vXsObbYPfcFvlSOneHJkQbglaAIwllFoELW2sS4bcBgi0FaVSMN1BZcoc&usqp=CAU" />
    </header>
  );
};

export default Header;
