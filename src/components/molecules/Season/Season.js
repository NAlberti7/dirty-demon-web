import React from "react";
import Text from "../../atoms/Text/Text";
import Mask from "../../atoms/Mask/Mask";
import styles from "./Season.module.scss";
import Icon from "../../atoms/Icon/Icon";
import Basics from "../../../assets/images/basicslogo.png"
import { Link } from "react-router-dom";

const Season = ({ fromHome, isMobile, mainFilter }) => {
  const isBasics = mainFilter === "basics" 
  
  return (
    <div className={`${styles.season} ${fromHome ? styles.fromHome : ""}`}>
      <Link to='/' className={`${styles.absolute} ${isBasics && styles.basics}`}>
       {isBasics ? <img src={Basics} alt="basics logo"/> : <Icon type='dirty' mid />}
      </Link>
    </div>
  );
};

export default Season;
