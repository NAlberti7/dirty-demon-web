import React from "react";
import Icon from "../../components/atoms/Icon/Icon";
import styles from "./Home.module.scss";
import MainFooterContent from "../../components/molecules/MainFooterContent/MainFooterContent";
// import Parallax from "../../components/atoms/ParallaxImage/ParallaxImage";
import Layout from "../../components/atoms/Layout/Layout";
import DirtyMainInfo from "../../components/molecules/DirtyMainInfo/DirtyMainInfo";
import ShopButton from "../../components/molecules/ShopButton/ShopButton";
import Text from "../../components/atoms/Text/Text"
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import BackgroundVideo from "../../assets/images/backgroundVideo.mp4"
const pageTransition = {
  duration: 1,
};

const pageStyle = {
  position: "absolute",
};

const pageVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -1000,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <motion.div initial='initial' animate='in' exit='out' variants={pageVariants}>
      <div className={styles.Home}>
        <Icon type='dirty' big />
        <DirtyMainInfo />
        <ShopButton />
        <a href="https://www.instagram.com/dirtydemonclo/" target="_blank" rel="noopener noreferrer" className={styles.spacing}>
        <Text size={14} tag='p' primary opacity={0.2} color='white'>
        FOLLOW US @DIRTYDEMONCLO
      </Text>
        </a>
      </div>

      <video autoplay loop muted playsinline autoPlay id="video" className={styles.backgroundVideo}>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      {/* <Parallax /> */}
    </motion.div>
  );
};

export default Home;
