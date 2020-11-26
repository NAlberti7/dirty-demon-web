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
  fromCheckout,
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
      <div className={styles.cartModal}>
        {fromCheckout && (
          <header className={styles.cartModal_header}>
            <Text priority={1} primary size={20} color='black' align='center'>
              ¡ATENCION {userInfo.name.toUpperCase()}!
            </Text>
          </header>
        )}
        <header className={`${styles.cartModal_header} ${fromCheckout && styles.fromCheckout}`}>
          {!fromCheckout ? (
            <Text priority={2} primary size={15} color='black' align='center'>
              ¡AÑADIDO AL CARRITO CORRECTAMENTE!
            </Text>
          ) : (
            <>
              <Text
                priority={2}
                primary
                size={15}
                color='black'
                align={isMobile ? "center" : "left"}
              >
                SERAS REDIRECCIONADO A MERCADOPAGO PARA FINALIZAR EL PROCESO DE COMPRA.{" "}
                {!isMobile && (
                  <Text tag='span' primary size={15} color='white' align='left'>
                    REVISA LA INFORMACION DE TU COMPRA.
                  </Text>
                )}
              </Text>
              {isMobile ? (
                <Text priority={2} primary size={15} color='white' align='center'>
                  REVISA LA INFORMACION DE TU COMPRA.
                </Text>
              ) : (
                <Text priority={2} size={15} color='black' align='left'>
                  UNA VEZ REALIZADO EL PAGO RECIBIRAS UN MAIL CON LA CONFIR- MACION DE LA COMPRA Y
                  SU CODIGO DE SEGUIMIENTO.
                </Text>
              )}
            </>
          )}
        </header>
        <main className={styles.cartModal_main}>
          {fromCheckout ? (
            <Text priority={3} primary size={17} color='black' align='center'>
              RESUMEN DEL PEDIDO
            </Text>
          ) : (
            <Text priority={3} primary size={15} color='black' align='center'>
              ({cartItems?.length})CARRITO
            </Text>
          )}
          <div className={styles.cartModal_mainContainer}>
            {cartItems &&
              cartItems.map((item, index) => {
                return (
                  <CartItem
                    item={item}
                    index={index}
                    fromCheckout={fromCheckout}
                    isMobile={isMobile}
                  />
                );
              })}
            {fromCheckout && sendType === "ENVIO EXPRESS" && (
              <CartItem
                item={{
                  shipping: `${userInfo.street} ${userInfo.streetnumber} ${userInfo.optional}, ${userInfo.cp}, ${userInfo.locality}, ${userInfo.province}`,
                  name: "ENVIO EXPRESS",
                  quantity: 1,
                  index: 10,
                  price: totalSendValue,
                }}
                isMobile={isMobile}
                fromCheckout
                isShipping
              />
            )}
          </div>
          {fromCheckout && !isMobile && (
            <Text priority={4} primary size={15} color='black' align='center'>
              TOTAL ${totalPrice}
            </Text>
          )}
          {fromCheckout && errorMessage && (
            <Text tag='p' size={12} weight='semibold' align='center' color='black'>
              {errorMessage}
            </Text>
          )}
        </main>
        <footer className={styles.cartModal_footer}>
          {isMobile && fromCheckout && (
            <Text priority={4} primary size={15} color='black' align='center'>
              TOTAL ${totalPrice}
            </Text>
          )}
          {fromCheckout && isMobile ? null : (
            <Button
              handleOnClick={() => showCart()}
              customStyle={isMobile ? styles.mobileContinue : ""}
            >
              CONTINUAR NAVEGANDO
            </Button>
          )}
          <Button handleOnClick={handleButton} isSecondary disabled={fromCheckout && isSubmitting}>
            {fromCheckout ? "FINALIZAR COMPRA" : "PROCESO DE PAGO"}
          </Button>
        </footer>
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
