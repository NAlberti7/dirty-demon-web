import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import ContentWithTitle from "../../components/organism/ContentWithTitle/ContentWithTitle";
import { MEDIAS } from "../Media/constants";
import Text from "../../components/atoms/Text/Text";
import { ReactComponent as BackArrow } from "../../assets/images/BackArrow.svg";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 500,
    transition: {
      ease: "linear",
      duration: 0.3,
      delay: 0,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// name: "COLLECTION 3",
//   type: "STUDIO",
//   ph: "GIANLYFE",
//   location: "@ESTUDIO.FAN",
//   models: ["@TOME.IGNACIO", "@NACHOREVETRIA", "@GIUVASALLO_"],
//   direction: ["@GIANLYFE", "@LEO4SUAREZ"],

const Media = ({ history, match, ...props }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const {
    params: { id },
  } = match;

  const media = MEDIAS.find((item) => item.id === id);

  const { name, ph, type, location, models, direction } = media;

  return (
    <>
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className={styles.item}
      >
        <motion.div className={styles.item_container} initial="exit" animate="enter" exit="exit">
          <div className={styles.item_info}>
            <div
              className={`${styles.itemNavigation_item} ${styles.arrow}`}
              onClick={() => history.push("/media")}
            >
              <BackArrow />
              <Text size={14} primary tag="span" color="white" customStyle={styles.spacing}>
                VOLVER
              </Text>
            </div>
            <div className={styles.mediaInfo_item}>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                {name}
              </Text>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                {type}
              </Text>
            </div>
            <div className={styles.mediaInfo_item}>
              <Text size={14} color="white" priority={4} primary>
                PHOTOGRAPHER
              </Text>
              <Text size={14} color="white" priority={4} primary>
                @{ph}
              </Text>
            </div>
            <div className={styles.mediaInfo_item}>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                LOCATION
              </Text>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                {location}
              </Text>
            </div>
            <div className={styles.mediaInfo_item}>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                MODELS
              </Text>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                {models.map((model) => `${model}\n`)}
              </Text>
            </div>
            <div className={styles.mediaInfo_item}>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                DIRECTION
              </Text>
              <Text size={14} color="white" priority={4} opacity={0.5}>
                {direction.map((director) => `${director}\n`)}
              </Text>
            </div>
          </div>
          <ShowCaseCarousel data={media} />
        </motion.div>
      </motion.main>
    </>
  );
};

export default Media;

const ShowCaseItem = ({ image, isMobile }) => {
  return (
    <div className={`${styles.sliderItem}`}>
      <img src={image} />
    </div>
  );
};

function ShowCaseCarousel({ data }) {
  const constraintsRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section className={styles.showCaseCarousel_section}>
      <motion.div className={styles.showCaseCarousel} ref={constraintsRef}>
        <motion.div
          className={styles.showCaseCarousel_container}
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.4}
        >
          {data.images.map((item) => (
            <ShowCaseItem image={item} isMobile={isMobile} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
