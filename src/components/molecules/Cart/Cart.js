import React from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./Cart.module.scss";
import Mask from "../../atoms/Mask/Mask";
import Text from "../../atoms/Text/Text"
import NavLink from "../../atoms/NavLink/NavLink";

import { useHistory } from "react-router-dom";
const Cart = ({ fromHome, isMobile, hasCartItems }) => {
  const history = useHistory();
  return !isMobile && (
    <div
      className={`${styles.cart} ${fromHome ? styles.fromHome : ""} ${hasCartItems &&
        isMobile &&
        styles.hasCartItems}`}
      onClick={() => history.push("/cart")}
    >
      <NavLink path="/cart" fromHome={fromHome}>
      {`CART (${hasCartItems})`}
      </NavLink>
      
      {/* <Text size={14} color="white" priority={4} primary opacity={0.5}>
              {`CART (${hasCartItems})`}
      </Text> */}
    </div>
  );
};

export default Cart;
