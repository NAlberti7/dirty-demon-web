import React, { useState } from "react";
import styles from "./DirtyMainInfo.module.scss";
import { motion } from "framer-motion";
import Text from "../../atoms/Text/Text";
import { useMediaQuery } from "react-responsive";
const variants = {
  hover: {
    x: 267,
  },
  nothover: {
    x: 222,
  },
};

const DirtyMainInfo = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [isHover, setIsHover] = useState(false);
  return (
    <div className={styles.dirtyMainInfo}>
      <div
        className={styles.dirtyMainInfo_textContainer}
        onPointerEnter={() => setIsHover(true)}
        onPointerLeave={() => setIsHover(false)}
      >
        <div className={`${styles.dirtyMainInfo_container}`}>
          <Text size={isMobile ? 29 : 57} tag='h2' primary>
            {isHover ? "MENS&WMNS" : "DIRTY DEMON"}{" "}
          </Text>
        </div>
        <div className={`${styles.dirtyMainInfo_container}`}>
          <Text
            size={isMobile ? 29 : 57}
            tag='h2'
            primary
            color='white'
            customStyle={styles.margin}
          >
            {isHover ? "HOODIES" : "DESIGN"}
          </Text>
          {!isMobile ? (
            <motion.div
              className={styles.cross}
              variants={variants}
              initial='nothover'
              animate={isHover ? "hover" : "nothover"}
            >
              <Text size={isMobile ? 29 : 57} tag='h2' primary color='white' opacity={0.4}>
                X
              </Text>
            </motion.div>
          ) : (
            <Text size={29} tag='span' primary color='white' opacity={0.4}>
              X
            </Text>
          )}
          <Text size={isMobile ? 29 : 57} tag='h2' primary color='white'>
            {isHover ? "TSHIRTS" : "STREETWEAR"}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default DirtyMainInfo;
