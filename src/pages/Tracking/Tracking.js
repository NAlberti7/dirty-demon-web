import React from "react";
import styles from "./Tracking.module.scss";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ContentWithTitle from "../../components/organism/ContentWithTitle/ContentWithTitle";
import TrackingForm from "../../components/organism/TrackingForm/TrackingForm";
import Text from "../../components/atoms/Text/Text";
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

const Contact = () => {
  return (
    <motion.main
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      className={styles.contact}
    >
      <ContentWithTitle title='TRACKING'>
        <Text tag='h3' size={14} align='left' color='white' primary>
          SI HA HECHO UN PEDIDO Y DESEA SABER EL ESTADO Y LA POSICION ACTUAL de su producto, COPIE Y
          PEGUE EL CODIGO QUE FUE ENVIADO AL CORREO ELECTRONICO ASIGNADO CON SU COMPRA. <br />{" "}
          <br />
          {` Si no ha recibido su código de seguimiento, y han pasado mas de 24 horas de su compra,
          contáctese con nosotros para que le reenviemos el mismo.`.toUpperCase()}{" "}
          <br /> <br />
        </Text>
        <Text tag='h3' size={14} align='left' color='white' primary opacity={0.2}>
          {`Los envíos se realizan a traves de Pickit. una vez despachados no somos responsables de las demoras que se generen en el correspondiente circuito. `.toUpperCase()}{" "}
          <br /> <br />
        </Text>
        <Text tag='h2' size={14} align='left' color='white' primary>
          SEGUIMIENTO DE PEDIDO
        </Text>

        <TrackingForm />
      </ContentWithTitle>
    </motion.main>
  );
};

export default Contact;
