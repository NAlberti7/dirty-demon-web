import React, { useEffect } from "react";
import styles from "./CartNotification.module.scss";
import Text from "../../atoms/Text/Text";
import CartItem from "../../molecules/CartItem/CartItem";
import Button from "../../molecules/Button/Button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  showCart as showCartAction,
  dismissError
  } from "../../../store/actions/cartActions";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const variants = {
    in: {
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 30,
        stiffness: 80,
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 30,
        stiffness: 80,
      },
    },
  };

  
const CartModal = ({
  cartItems,
  dismissError,
  removeItemCart,
  showCartAction,
  showCart
}) => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const onNotification = async () => {
        await setTimeout(() => {
            showCartAction()
        }, 4000);
    }
    dismissError();
    onNotification()
  }, []);
  
  if(!cartItems.length){
      return
  }

  const item = cartItems[cartItems.length - 1] 
  const { name, size, color, price, quantity, itemPicture, shipping } = item;
  const { front } = itemPicture

 const onPress = () => history.push("/cart")
  return (
      <motion.div className={styles.cartNotification} variants={variants}
      animate="in"
      exit="out"
      initial="out">
      <div className={styles.cartItem}>
        <div className={styles.cartItem_info}>
        <Text priority={2} primary size={15} color='white' align='left' customStyle={styles.spacingbottom}>
        AÑADIDO AL CARRITO
            </Text>
            <Text priority={2} primary size={15} color='white' align='left' opacity={0.5}>
        {`(${quantity})${name}`}
            </Text>
                <Text priority={3} size={15} color='white' align='left' weight='light' opacity={0.5}>
                {color.toUpperCase()}
                </Text>
                <Text priority={3} size={15} color='white' align='left' weight='light' opacity={0.5} customStyle={styles.spacingbottom}>
                TALLE {size.toUpperCase()}
                </Text>{" "}
            <Text priority={3} size={15} color='white' align='left' opacity={0.5}>
            ${price}
            </Text>
        </div>
        <img src={front} className={styles.image} />
    </div>
          <Button customStyle={styles.button} handleOnClick={onPress}>IR A CHECKOUT {`(${cartItems.length})`} </Button>
      </motion.div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.general.cartItems,
  showCart: state.general.showCart,
});

export default connect(mapStateToProps, { showCartAction, dismissError })(
  CartModal
);
