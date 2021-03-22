import React from "react";
import styles from "./Footer.module.scss";
import Text from "../../atoms/Text/Text";

const Footer = ({ fromHome }) => {
  return (
    !fromHome && (
      <footer className={`${styles.footer} ${fromHome && styles.fromHome}`}>
        <div className={styles.footer_container}>
          <div className={styles.footer_containerLeft}>
            <Text size={14} tag="p" primary color="white" align="left">
              @DIRTYDEMONCLO
            </Text>
            <Text size={14} tag="p" color="white" align="left" opacity={0.5}>
              BUENOS AIRES, ARGENTINA
            </Text>
          </div>
          <div className={styles.footer_containerRight}>
            <Text size={14} tag="p" primary color="white" align="left">
              ©2021 DIRTY DEMON™. ALL RIGHTS RESERVED.
            </Text>
            <Text size={14} tag="p" color="white" align="left" opacity={0.5}>
              WEST DISCTRICT CLOTHING COMPANY
            </Text>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
