import React from "react";
import styles from "./Footer.module.scss";
import Text from "../../atoms/Text/Text";

const Footer = ({ fromHome }) => {
  return (
    <footer className={`${styles.footer} ${fromHome && styles.fromHome}`}>
      <Text size={14} tag='p' primary opacity={0.2} color='white'>
        ©2020 DIRTY DEMON™ . ALL RIGHTS RESERVED.
      </Text>
      <Text size={14} tag='p' primary opacity={0.2} color='white'>
        WEST DISCTRICT CLOTHING COMPANY
      </Text>
    </footer>
  );
};

export default Footer;
