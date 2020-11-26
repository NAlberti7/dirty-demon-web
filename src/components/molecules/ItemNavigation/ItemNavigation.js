import React from "react";
import styles from "./ItemNavigation.module.scss";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import { useHistory } from "react-router-dom";

const ItemNavigation = ({ title, isMobile }) => {
  const history = useHistory();
  return (
    <div className={styles.itemNavigation}>
      {!isMobile && (
        <div className={`${styles.itemNavigation_item} ${styles.arrow}`} onClick={() => history.push("/store")}>
          <Icon type='arrow' customWidth={36} opacity={0.3} />
        </div>
      )}
      <div className={styles.itemNavigation_item}>
        <Text size={isMobile ? 21 : 38} primary priority={1} color='white'>
          {title}
        </Text>
      </div>
    </div>
  );
};

export default ItemNavigation;
