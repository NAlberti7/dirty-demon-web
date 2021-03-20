import React from "react";
import styles from "./ItemNavigation.module.scss";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import {ReactComponent as BackArrow} from "../../../assets/images/BackArrow.svg"
import { useHistory } from "react-router-dom";

const ItemNavigation = ({ title, isMobile, price }) => {
  const history = useHistory();
  return (
    <div className={styles.itemNavigation}>
      {!isMobile && (
        <div className={`${styles.itemNavigation_item} ${styles.arrow}`} onClick={() => history.push("/store")}>
          <BackArrow />
          <Text size={14} primary tag="span" color='white' customStyle={styles.spacing}>
          VOLVER
        </Text>
        </div>
      )}
      <div className={styles.itemNavigation_item}>
        <Text size={isMobile ? 18 : 27} primary priority={1} color='white'>
          {title}
        </Text>
        {isMobile && <Text size={isMobile ? 18 : 27} primary priority={1} color='white'>
          PRECIO ${price}
        </Text>}
      </div>
    </div>
  );
};

export default ItemNavigation;
