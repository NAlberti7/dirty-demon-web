import React, { useState } from "react";
import styles from "./MainHeaderContent.module.scss";
import Text from "../../atoms/Text/Text";
import { connect } from "react-redux";
import { setShopHover, dismissShopHover } from "../../../store/actions/generalActions";
import NavLink from "../../atoms/NavLink/NavLink";
import { motion } from "framer-motion";
import ShopButton from "../ShopButton/ShopButton";
const variants = {
  hover: {
    x: 267,
  },
  nothover: {
    x: 160,
  },
};
const MainHeaderContent = ({ fromHome, isShopHover, setShopHover, dismissShopHover, isMobile }) => {
  return (
    <div
      className={`${styles.mainHeaderContent} ${fromHome ? styles.fromHome : styles.notfromhome}`}
    >
      <div className={styles.mainHeaderContent_container}>
        {!fromHome && (
          <NavLink path="/store" fromHome={fromHome}>
            SHOP
          </NavLink>
        )}
        <NavLink path="/media" fromHome={fromHome}>
          MEDIA
        </NavLink>
        <NavLink path="/contact" fromHome={fromHome}>
          CONTACT
        </NavLink>
        <NavLink path="/more" fromHome={fromHome}>
          MORE
        </NavLink>
      </div>
    </div>
  );
};

export default connect(null, { setShopHover, dismissShopHover })(MainHeaderContent);
