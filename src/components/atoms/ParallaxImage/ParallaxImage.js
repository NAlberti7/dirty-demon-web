import React, { useRef, useState, useEffect } from "react";
import styles from "./ParallaxImage.module.scss";
import { motion, useAnimation } from "framer-motion";
import { parallaxItems } from "../../../models/parallax";
import { useMediaQuery } from "react-responsive";

const ParallaxImage = ({ image, velocity, position }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const ref = useRef(null);
  const [height, setHeight] = useState(null);
  const controls = useAnimation();

  const variants = {
    visible: {
      y: isMobile ? -1250 : -2500,
      x: "-50%",
      transition: { ease: "easeInOut", duration: 4, delay: 1, staggerChildren: 0.1 },
    },
    hidden: { y: isMobile ? -65 : -250, x: "-50%" },
    exit: { transition: { staggerChildren: 0.1 } },
  };

  const variants2 = {
    exit: { transition: { staggerChildren: 0.1 } },
    enter: { transition: { staggerChildren: 0.1 } },
  };

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition },
    },
  };

  useEffect(() => {
    if (ref) {
      let height = ref.current.getBoundingClientRect().height;
      if (height === 0) {
        if (isMobile) {
          setHeight(2167);
        } else {
          setHeight(3830.5);
        }
      } else setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref.current]);

  console.log(height);

  return (
    <motion.div
      className={styles.parallax}
      ref={ref}
      variants={variants}
      initial='hidden'
      animate={height ? "visible" : "hidden"}
      exit='exit'
    >
      {parallaxItems.map((link, index) => {
        return (
          <motion.div
            className={`${styles.parallax_item} ${styles[index]}`}
            variants={thumbnailVariants}
          >
            <img src={link} />
          </motion.div>
        );
      })}
      {/* <motion.div style={{ position }}>
      <img src={image} />
    </motion.div> */}
    </motion.div>
  );
};

export default ParallaxImage;
