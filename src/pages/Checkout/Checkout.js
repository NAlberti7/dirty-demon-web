import React, { useState, useEffect } from "react";
import ShipImage from "../../components/atoms/ShipImage/ShipImage";
import Button from "../../components/molecules/Button/Button";
import CheckoutFirstStep from "../../components/organism/CheckoutFirstStep/CheckoutFirstStep";
import CheckoutSecondStep from "../../components/organism/CheckoutSecondStep/CheckoutSecondStep";
import ModalPreview from "../../components/organism/ModalPreview/ModalPreview";
import Text from "../../components/atoms/Text/Text";
import styles from "./Checkout.module.scss";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  calculateZipCode,
  calculatePrice,
  showCart,
  setUserInfo,
  setSendType,
} from "../../store/actions/cartActions";
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

const shipVariants = {
  visible: {
    y: [200, 0, 0, 0],
    x: [500, 500, 500, 0],
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  hidden: {
    opacity: 0,
  },
};

const formVariants = {
  visible: {
    x: [-500, 0],
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: "easeInOut",
    },
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
  showCart,
  setUserInfo,
  setSendType,
  history,
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
      showCart();
    }
  };

  return (
    <>
      <motion.main initial="initial" animate="in" exit="out" variants={pageVariants}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <article className={styles.checkout}>
            {!isMobile && (
              <motion.section
                className={styles.checkout_left}
                initial="hidden"
                animate="visible"
                variants={shipVariants}
              >
                <ShipImage shipImage={cartItems[0]?.ship_image} name={cartItems[0]?.name} isBig />
                <Button
                  type="submit"
                  disabled={!formState.isValid || !selected || formState.isSubmitting}
                >
                  CONTINUAR COMPRA
                </Button>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.general.cartItems,
  totalPrice: state.general.totalPrice,
  sendValue: state.general.sendValue,
  isRequestingSend: state.cart.isRequestingSend,
  showPreviewModal: state.general.showPreviewModal,
});

export default connect(mapStateToProps, {
  calculateZipCode,
  calculatePrice,
  showCart,
  setUserInfo,
  setSendType,
})(Checkout);
