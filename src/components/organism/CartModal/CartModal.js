import React, { useEffect } from "react";
import styles from "./CartModal.module.scss";
import Text from "../../atoms/Text/Text";
import CartItem from "../../molecules/CartItem/CartItem";
import Button from "../../molecules/Button/Button";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  showCart,
  payToMercadoPago,
  setSubmit,
  dismissError,
} from "../../../store/actions/cartActions";
import { useMediaQuery } from "react-responsive";
const CartModal = ({
  cartItems,
  totalPrice,
  showCart,
  fromCheckout =true,
  dataName,
  payToMercadoPago,
  userInfo,
  sendType,
  totalSendValue,
  isSubmitting,
  setSubmit,
  errorMessage,
  dismissError,
}) => {
  const history = useHistory();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    dismissError();
  }, []);

  const handleButton = () => {
    if (fromCheckout) {
      setSubmit();
      let parsedInfo;
      if (sendType === "GRATIS") {
        parsedInfo = {
          name: userInfo.name,
          lastName: userInfo.lastname,
          email: userInfo.email,
          tel: userInfo.phone,
        };
      } else {
        parsedInfo = {
          name: userInfo.name,
          lastName: userInfo.lastname,
          email: userInfo.email,
          tel: userInfo.phone,
          address: userInfo.street,
          addressNumber: userInfo.streetnumber,
          addressOptional: userInfo.optional,
          zipCode: userInfo.cp,
          province: userInfo.province,
          locality: userInfo.locality,
        };
      }
      payToMercadoPago(cartItems, parsedInfo, sendType, totalSendValue);
    } else {
      showCart();
      history.push("/checkout");
    }
  };
  return (
    <>
      <div className={styles.cartModalOverlay} onClick={() => showCart()}></div>
      <div className={styles.continue}>
      <Text priority={3} size={18} color='white' align='center'>
              ATENCION
            </Text>
            <Text priority={4} size={18} color='white' align='center' >
                        SERAS REDIRIGIDO A MERCADOPAGO 
            PARA FINALIZAR LA COMPRA. ES UN 
            LINK SEGURO Y TUS DATOS ESTAN 
            100% PROTEGIDOS
            </Text>

          <Button handleOnClick={handleButton}>
           CONTINUAR
          </Button>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.general.cartItems,
  totalPrice: state.general.totalPrice,
  userInfo: state.cart.userInfo,
  sendType: state.cart.sendType,
  totalSendValue: state.general.totalSendValue,
  isSubmitting: state.cart.isSubmitting,
  errorMessage: state.cart.errorMessage,
});

export default connect(mapStateToProps, { showCart, payToMercadoPago, setSubmit, dismissError })(
  CartModal
);
