import React from "react";
import styles from "./Mask.module.scss";
import { motion } from "framer-motion";
const Mask = ({ width, play }) => {
  const variants = {
    visible: {
      type: "spring",
      stiffness: 0,
      x: width,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0,
      },
      transitionEnd: {
        display: "none",
      },
    },
    hidden: { type: "spring", stiffness: 0, x: -50 },
  };

  return <motion.div className={styles.mask} style={{ width: `${width}px` }} variants={variants} initial='hidden' animate={play ? "visible" : "hidden"}></motion.div>;
};

export default Mask;
