import React from "react";
import Icon from "../../atoms/Icon/Icon";
import styles from "./BurgerMenu.module.scss";
import Lottie from "react-lottie";
import burgerData from "../../../assets/images/burger-menu.json";

const defaultOptions = {
  loop: false,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid meet",
  },
};

const Cart = ({ onClick, isOpen }) => {
  return (
    <div className={styles.burger} onClick={onClick}>
      {/* <Icon type='burger' customWidth={20} /> */}
      <Lottie
        options={{ animationData: burgerData, ...defaultOptions }}
        style={{ width: "35px", fill: "white" }}
        isClickToPauseDisabled={true}
        isStopped={!isOpen}
      />
    </div>
  );
};

export default Cart;
