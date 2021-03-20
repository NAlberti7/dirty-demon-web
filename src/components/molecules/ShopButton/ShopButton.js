import React from "react";
import styles from "./ShopButton.module.scss";
import { Link } from "react-router-dom";
import Text from "../../atoms/Text/Text";
const ShopButton = () => {
  return (
    <Link className={styles.shopButton} to='/store'>
      <Text size={18} color='white' tag='span' primary>
        SHOP
      </Text>
    </Link>
  );
};

export default ShopButton;
