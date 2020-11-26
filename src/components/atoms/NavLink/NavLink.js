import React from "react";
import styles from "./NavLink.module.scss";
import { NavLink, useLocation } from "react-router-dom";

const Link = ({ path, fromHome, children }) => {
  const location = useLocation();
  const isActive = location.pathname === path && !fromHome;

  return (
    <NavLink
      className={`${styles.navLink} ${fromHome && styles.fromHome} ${isActive && styles.isActive}`}
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
