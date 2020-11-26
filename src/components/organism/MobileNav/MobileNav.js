import React from "react";
import styles from "./MobileNav.module.scss";
import MainHeaderContent from "../../molecules/MainHeaderContent/MainHeaderContent";
import Icon from "../../atoms/Icon/Icon";
import { Link } from "react-router-dom";
import { ReactComponent as Cross } from "../../../assets/images/crosss1.svg";
import { motion } from "framer-motion";
const variants = {
  in: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
  out: {
    opacity: 1,
    y: "100vh",
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const MobileNav = ({ closeNav }) => {
  return (
    <motion.div
      className={styles.mobileNav}
      variants={variants}
      animate='in'
      exit='out'
      initial='out'
    >
      <Link to='/' className={styles.logo}>
        <Icon type='dirty' mid />
      </Link>
      <MainHeaderContent isMobile />
      <div className={styles.cross} onClick={closeNav}>
        <Cross />
      </div>
    </motion.div>
  );
};

export default MobileNav;
