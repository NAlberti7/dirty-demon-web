import React, { useState, useEffect } from "react";
import ShipImage from "../../components/atoms/ShipImage/ShipImage";
import Button from "../../components/molecules/Button/Button";
import CheckoutFirstStep from "../../components/organism/CheckoutFirstStep/CheckoutFirstStep";
import CheckoutSecondStep from "../../components/organism/CheckoutSecondStep/CheckoutSecondStep";
import ModalPreview from "../../components/organism/ModalPreview/ModalPreview";
import Text from "../../components/atoms/Text/Text";
import CheckoutModal from "../../components/organism/CartModal/CartModal";
import styles from "./Checkout.module.scss";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  calculateZipCode,
  calculatePrice,
  showChekoutModal,
  setUserInfo,
  setSendType,
} from "../../store/actions/index";
import Form from "../../components/atoms/Form/Form";
import { useMediaQuery } from "react-responsive";
const pageVariants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 1,
    transition: {
      ease: "linear",
      duration: 0.3,
      delay: 0,
    },
  },
  in: {
    opacity: 1,
    scale: 1,
    x: 0,
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

const formVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const Checkout = ({
  cartItems,
  sendValue,
  calculateZipCode,
  isRequestingSend,
  totalPrice,
  calculatePrice,
  showPreviewModal,
  showChekoutModal,
  setUserInfo,
  setSendType,
  history,
  showCheck
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [selected, setSelected] = useState(null);
  const [step, setStep] = useState(1);
  const [infoFirst, setInfoFirst] = useState(null);
  const [errorsFirst, setErrorFirst] = useState(null);

  useEffect(() => {
    if (!cartItems.length) history.push("/store");
  }, []);

  console.log("select", selected);

  const { register, errors, watch, handleSubmit, reset, formState } = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });

  const watchSendValue = watch(["cp", "province"]);

  useEffect(() => {
    let timeout;
    if (watchSendValue.cp && watchSendValue.province) {
      const data = {
        address: {
          postalCode: watchSendValue.cp,
          address: "",
          city: "",
          province: watchSendValue.province,
        },
        items: [...cartItems],
      };
      timeout = setTimeout(() => {
        calculateZipCode(data);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [watchSendValue]);

  useEffect(() => {
    calculatePrice();
  }, [sendValue]);

  const buttonHandler = () => {};
  const onSubmit = (data) => {
    if (step === 1) {
      setInfoFirst(data);
      reset();
      setStep(2);
    } else {
      setUserInfo({ ...infoFirst, ...data });
      setSendType(selected.type);
      showChekoutModal(true);
    }
  };

  const sendPrice = sendValue.includes("INGRESA") ? 0 : Number(sendValue.replace("$", ""));
  const value = Number(totalPrice) - sendPrice
  console.log("sendvalue", sendValue)

  return (
    <>
      <motion.main initial="initial" animate="in" exit="out" variants={pageVariants}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <article className={styles.checkout}>
            {!isMobile && (
              <motion.section
                className={styles.cart_left}
                initial="hidden"
                animate="visible"
                variants={isMobile ? null : formVariants}
              >
                 <div className={styles.cart_title}>
          <Text priority={1} primary size={isMobile ? 40 : 72} color='white' align='left'>
            CART
          </Text>
          {isMobile && (
            <Text priority={1} primary size={18} color='white' align='left'>
              ({cartItems.length})ITEMS
            </Text>
          )}
        </div>
        {!isMobile && (
          <div>
            <Text priority={3} size={14} color='white' align='left' opacity={0.5}>
              {cartItems.length} ARTICULOS
            </Text>
            <Text priority={3} size={14} color='white' align='left' opacity={0.5}>
              PRECIO: ${value} <br />
              + <br />
              {sendValue.includes("INGRESA") ? "CALCULANDO ENVIO" : "Envio: " + `${selected.price === "GRATIS" ? "GRATUITO" : sendValue}`}
            </Text>
            <Text priority={3} size={14} color='white' align='left' opacity={0.5} customStyle={styles.iva}>
            IVA(*) INCLUIDO
            </Text>
          <div className={styles.cart_leftFooter}>
            <Text priority={5} primary size={14} color='white' align='left'>
              TOTAL ${totalPrice}
            </Text>
            <Button
                  type="submit"
                  disabled={!formState.isValid || !selected || formState.isSubmitting}
                >
                  CONTINUAR COMPRA
                </Button>
          </div>
          </div>
        )}
              </motion.section>
            )}
            <motion.section
              className={styles.checkout_right}
              initial="hidden"
              animate="visible"
              variants={isMobile ? null : formVariants}
            >
              <AnimatePresence exitBeforeEnter>
                {step === 1 && (
                  <CheckoutFirstStep
                    selected={selected}
                    setSelected={setSelected}
                    register={register}
                    errors={errors}
                    key="first"
                  />
                )}
                {step === 2 && (
                  <CheckoutSecondStep
                    selected={selected}
                    setSelected={setSelected}
                    register={register}
                    errors={errors}
                    key="second"
                    sendValue={sendValue}
                  />
                )}
              </AnimatePresence>
            </motion.section>
          </article>
          {isMobile && (
            <div className={styles.buttonMobile}>
              <Text priority={4} size={18} weight="bold" align="center" color="orange">
                TOTAL ${totalPrice}
              </Text>
              <Button
                type="submit"
                disabled={!formState.isValid || !selected || formState.isSubmitting}
              >
                CONTINUAR COMPRA
              </Button>
            </div>
          )}
        </Form>
      </motion.main>
      {showPreviewModal && <ModalPreview fromCheckout />}
      {showCheck && < CheckoutModal />}
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.general.cartItems,
  totalPrice: state.general.totalPrice,
  sendValue: state.general.sendValue,
  isRequestingSend: state.cart.isRequestingSend,
  showPreviewModal: state.general.showPreviewModal,
  showCheck: state.general.showCheckoutModal,
});

export default connect(mapStateToProps, {
  calculateZipCode,
  calculatePrice,
  showChekoutModal,
  setUserInfo,
  setSendType,
})(Checkout);




