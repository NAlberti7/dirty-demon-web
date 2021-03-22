import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Media.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import ContentWithTitle from "../../components/organism/ContentWithTitle/ContentWithTitle";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import MediaDrop from "../../components/organism/MediaDrop";
import { MEDIA_1, MEDIA_2, MEDIA_3, MEDIA_4 } from "./constants";
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

const Media = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={isMobile ? null : pageVariants}
      className={styles.more}
    >
      <article className={styles.more_article}>
        <ContentWithTitle title="MEDIA">
          <div className={styles.question}>
            <MediaDrop data={MEDIA_3} />
            <MediaDrop data={MEDIA_1} />
            <MediaDrop data={MEDIA_2} />
            <MediaDrop data={MEDIA_4} />
          </div>
        </ContentWithTitle>
      </article>
    </motion.main>
  );
};

export default Media;
