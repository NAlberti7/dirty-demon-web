import React from "react";
import Text from "../../atoms/Text/Text";
import Mask from "../../atoms/Mask/Mask";
import styles from "./Season.module.scss";
import Icon from "../../atoms/Icon/Icon";
import { Link } from "react-router-dom";

const Season = ({ fromHome, isMobile }) => {
  return (
    <div className={`${styles.season} ${fromHome ? styles.fromHome : ""}`}>
      {!fromHome ? <Mask width={190} play={!fromHome} /> : null}
      <Link to='/'>
        <Icon type='dirty' mid />
      </Link>
    </div>
  );
};

export default Season;
