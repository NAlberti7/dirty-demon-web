import React, { useRef, useState, useEffect } from "react";
import styles from "./ParallaxImage.module.scss";
import { motion, useAnimation } from "framer-motion";
import { parallaxItems } from "../../../models/parallax";

const ParallaxImage = ({ image, velocity, position }) => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  function checkIndex(i) {
    if (i === 5) {
      return 0;
    } else if (i === 6) {
      return 200;
    } else if (i === 7) {
      return 800;
    } else {
      return -1000;
    }
  }

  function checkHidden(i) {
    if (i === 0) {
      return -100;
    } else if (i === 1) {
      return 200;
    } else if (i === 2) {
      return 700;
    } else {
      return 1000;
    }
  }

  function checkDelay(i) {
    if (i === 0 || i === 1) {
      return 1;
    } else if (i === 2) {
      return 1.2;
    } else if (i >= 5) {
      return 4;
    } else {
      return i * 0.8;
    }
  }

  const variants = {
    visible: (i) => ({
      y: checkIndex(i),
      transition: {
        ease: i <= 2 ? "easeInOut" : "easeOut",
        delay: checkDelay(i),
        duration: 3.2,
      },
    }),
    hidden: (i) => ({
      y: checkHidden(i),
    }),
  };

  return (
    <motion.div className={styles.parallax}>
      {parallaxItems.map((link, index) => {
        return (
          <motion.div className={`${styles.parallax_item} ${styles[index]}`} initial='hidden' variants={variants} custom={index} animate='visible'>
            <img src={link} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ParallaxImage;
