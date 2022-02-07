import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={css.nav}>
      <NavLink
        to="/profile"
        className={(navData) =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/dialogs"
        className={(navData) =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Messages
      </NavLink>

      <NavLink
        to="/news"
        className={(navData) =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        News
      </NavLink>

      <NavLink
        to="/music"
        className={(navData) =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Music
      </NavLink>

      <NavLink
        to="/settings"
        className={(navData) =>
          navData.isActive ? `${css.activeLink} ${css.link}` : `${css.link}`
        }
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
