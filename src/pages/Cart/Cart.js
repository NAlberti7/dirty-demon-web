import React, { useEffect } from "react";
import styles from "./Cart.module.scss";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import Text from "../../components/atoms/Text/Text";
import Button from "../../components/molecules/Button/Button";
import CheckoutItem from "../../components/molecules/CheckoutItem/CheckoutItem";
import SliderCheckout from "../../components/organism/SliderCheckout/SliderCheckout";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router-dom";
import { calculatePrice } from "../../store/actions/cartActions";
const pageVariants = {
  initial: {
    opacity: 0,
    y: 500,
    transition: {
      ease: "linear",
      duration: 0.3,
      delay: 0,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const Cart = ({ cartItems, totalPrice = "", calculatePrice }) => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    calculatePrice();
    if (!cartItems.length) history.push("/store");
  }, [cartItems]);

  return (
    <motion.main
      initial='initial'
      animate='in'
      exit='out'
      variants={isMobile ? null : pageVariants}
      className={styles.cart}
    >
      <div className={styles.cart_left}>
        <div className={styles.cart_title}>
          <Text priority={1} primary size={isMobile ? 40 : 72} color='white' align='left'>
            CART <br />
            {!isMobile ? `ITEMS (${cartItems.length})` : ""}
          </Text>
          {isMobile && (
            <Text priority={1} primary size={18} color='white' align='left'>
              ({cartItems.length})ITEMS
            </Text>
          )}
        </div>
        {!isMobile && (
          <>
            <Text priority={1} primary size={22} color='white' align='left'>
              TOTAL ${totalPrice}
            </Text>
            <Button handleOnClick={() => history.push("/checkout")}>PROCESO DE PAGO</Button>{" "}
          </>
        )}
      </div>
      {isMobile ? (
        <SliderCheckout cartItems={cartItems} />
      ) : (
        <div className={styles.cart_container}>
          {cartItems &&
            cartItems.map((item, index) => {
              return <CheckoutItem item={item} index={index} />;
            })}
        </div>
      )}

      {isMobile && (
        <div className={styles.buttonMobile}>
          <Text priority={4} size={18} weight='bold' align='center' color='orange'>
            TOTAL ${totalPrice}
          </Text>
          <Button handleOnClick={() => history.push("/checkout")}>PROCESO DE PAGO</Button>
        </div>
      )}
    </motion.main>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.general.cartItems,
  totalPrice: state.general.totalPrice,
});

export default connect(mapStateToProps, { calculatePrice })(Cart);
