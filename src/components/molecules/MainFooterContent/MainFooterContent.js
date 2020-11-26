import React from "react";
import styles from "./MainFooterContent.module.scss";
import Text from "../../atoms/Text/Text";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const MainHeaderContent = ({ fromHome, isShopHover }) => {
  const variants = {
    hover: {
      x: 267,
    },
    nothover: {
      x: 160,
    },
  };

  return (
    <div className={styles.mainFooterContent}>
      <div className={`${styles.mainFooterContent_container} ${fromHome ? styles.fromHome : ""}`}>
        {fromHome ? (
          <>
            <Text size={fromHome ? 57 : 36} tag='h2' primary color='orange' customStyle={styles.margin}>
              {isShopHover ? "HOODIES" : "HYPE"}
            </Text>
            <motion.div className={styles.cross} variants={variants} initial='nothover' animate={isShopHover ? "hover" : "nothover"}>
              <Text size={fromHome ? 57 : 36} tag='h2' primary color='orange' opacity={0.4}>
                X
              </Text>
            </motion.div>
            <Text size={fromHome ? 57 : 36} tag='h2' primary color='orange'>
              {isShopHover ? "TSHIRTS" : "STREETWEAR"}
            </Text>{" "}
          </>
        ) : (
          <Text size={36} tag='h2' primary color='orange'>
            HODDIES
            <Text size={36} tag='span' primary color='orange' opacity={0.4}>
              X
            </Text>
            TSHIRTS
          </Text>
        )}
      </div>
      <div className={styles.mainFooterContent_container}>
        <Text size={14} tag='p' opacity={0.3}>
          REMERAS Y BUZOS OVERSIZE / UNISEX <br />
          {fromHome ? "DROPS LIMITADOS" : ""}
        </Text>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isShopHover: state.general.isShopHover,
});

export default connect(mapStateToProps)(MainHeaderContent);
