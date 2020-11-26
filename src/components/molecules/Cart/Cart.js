import React from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./Cart.module.scss";
import Mask from "../../atoms/Mask/Mask";
import { useHistory } from "react-router-dom";
const Cart = ({ fromHome, isMobile, hasCartItems }) => {
  const history = useHistory();
  return (
    <div
      className={`${styles.cart} ${fromHome ? styles.fromHome : ""} ${hasCartItems &&
        isMobile &&
        styles.hasCartItems}`}
      onClick={() => history.push("/cart")}
    >
      {!fromHome && !isMobile ? <Mask width={190} play={!fromHome} /> : null}
      <span className={styles.cart_number}>{hasCartItems}</span>
      <Icon type={isMobile ? "cartmobile" : "bag"} customWidth={22.5} />
    </div>
  );
};

export default Cart;
