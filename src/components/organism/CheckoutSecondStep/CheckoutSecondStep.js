import React, { useState, useEffect, useRef } from "react";
import styles from "./CheckoutSecondStep.module.scss";
import Field from "../../molecules/Field/Field";
import CheckoutTitles from "../../molecules/CheckoutTitles/CheckoutTitles";
import FieldGroup from "../../atoms/FieldGroup/FieldGroup";
import ShippingCard from "../../molecules/ShippingCard/ShippingCard";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const checkoutVariants = {
  in: {
    opacity: 1,
    y: [200, 0],
    transition: {
      ease: "easeOut",
      duration: 0.5,
      delay: 0,
    },
  },
  out: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const CheckoutSecondStep = ({ selected, register, errors, sendValue }) => {
  const controls = useAnimation();
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      controls.start({
        scale: [1.2, 0.9, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [sendValue]);

  const isFree = selected.price === "GRATIS";

  return (
    <motion.div
      className={styles.checkoutSecondStep}
      animate='in'
      exit='out'
      initial='out'
      variants={checkoutVariants}
    >
      <div className={styles.container}>
        <CheckoutTitles title='TIPO DE ENTREGA' />
        <ShippingCard
          item={{ ...selected, price: isFree ? selected.price : sendValue }}
          isSelected
          controls={controls}
        />
      </div>
      <div className={styles.container}>
        <CheckoutTitles
          title={isFree ? "DATOS DE COMPRA" : "DATOS DE ENTREGA"}
          description={isFree ? "INGRESA TUS DATOS DE COMPRA" : "INGRESA TUS DATOS DE ENVIO"}
        />
        <FieldGroup>
          <Field
            name='name'
            type='text'
            placeholder='NOMBRE'
            inputRef={register({
              required: "CAMPO REQUERIDO",
            })}
            error={errors.name}
          />
          <Field
            name='lastname'
            type='text'
            placeholder='APELLIDO'
            inputRef={register({
              required: "CAMPO REQUERIDO",
            })}
            error={errors.lastname}
          />
        </FieldGroup>
        {!isFree && (
          <>
            <FieldGroup>
              <Field
                name='street'
                type='text'
                placeholder='CALLE'
                inputRef={register({
                  required: "CAMPO REQUERIDO",
                })}
                error={errors.street}
              />
              <Field
                name='streetnumber'
                type='text'
                placeholder='NUMERO'
                inputRef={register({
                  required: "CAMPO REQUERIDO",
                  pattern: /^\d+$/,
                })}
                error={errors.streetnumber}
              />
            </FieldGroup>
            <FieldGroup>
              <Field
                name='optional'
                type='text'
                placeholder='CASA, PISO, APARTAMENTO'
                inputRef={register()}
                error={errors.optional}
              />
              <Field
                name='cp'
                type='text'
                placeholder='CODIGO POSTAL'
                inputRef={register({
                  required: "CAMPO REQUERIDO",
                  pattern: /^\d+$/,
                })}
                error={errors.cp}
              />
            </FieldGroup>
            <FieldGroup>
              <Field
                name='province'
                placeholder='PROVINCIA'
                inputRef={register({
                  required: "CAMPO REQUERIDO",
                })}
                error={errors.province}
                isSelect
              />
              <Field
                name='locality'
                type='text'
                placeholder='LOCALIDAD'
                inputRef={register({
                  required: "CAMPO REQUERIDO",
                })}
                error={errors.locality}
              />
            </FieldGroup>{" "}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default CheckoutSecondStep;
