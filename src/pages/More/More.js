import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./More.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import ContentWithTitle from "../../components/organism/ContentWithTitle/ContentWithTitle";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
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

const More = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <motion.main
      initial="initial"
      animate="in"
      exit="out"
      variants={isMobile ? null : pageVariants}
      className={styles.more}
    >
      <article className={styles.more_article}>
        <ContentWithTitle title="FAQS">
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Cuánto demora la entrega del pedido?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Los envíos que tengan como destino CABA y Provincia de Buenos Aires serán entregados
              entre 1 y 7 días hábiles después de confirmado el empaquetado del pedido. <br />{" "}
              <br />
              En caso de los envíos al interior del país, los mismos serán entregados entre 5 a 9
              días hábiles una vez confirmado el empaquetado de la compra. <br /> <br />
              En caso de Retiros en nuestro estudio de Ramos Mejia, el pedido estará a partir de las
              12 hs hábiles siguientes una vez confirmado el empaquetado de la compra. En tanto, el
              pedido estará disponible para ser retirado por nuestro estudio los próximos 15 días
              hábiles siguientes, desde el momento de la compra. Una vez transcurrido este período,
              retorna el pedido al conteo de stock. <br /> <br />
              Por el momento no hacemos envíos Worldwide.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Cuál es el medio de entrega?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Las entregas a domicilio se realizan a través del servicio privado CORREO ARGENTINO.
            </Text>
            <ul>
              <li>
                <Text
                  priority={3}
                  size={14}
                  color="white"
                  align="left"
                  customStyle={styles.more_articleMax}
                >
                  <span>Envíos a domicilio:</span> Esta dirección de entrega será la que indiques en
                  el proceso de compra. Considera que deberás haber cargado correctamente estos
                  datos en tu perfil de nuestra Tienda Online. La dirección de entrega no tiene que
                  ser tu domicilio obligatoriamente, pero sí deberás tener acceso a éste para
                  obtener tu pedido. El costo de envío estará conforme a los precios vigentes del
                  servicio privado CORREO ARGENTINO según distancia, considerando el origen en GBA
                  (Gran Buenos Aires).
                </Text>
              </li>
              <li>
                <Text
                  priority={3}
                  size={14}
                  color="white"
                  align="left"
                  customStyle={styles.more_articleMax}
                >
                  <span>Retiro por el estudio de Dirty Demon:</span> El servicio no tiene costo. Te
                  enviaremos un email con la dirección de retiro, de Lunes a Sábados de 12 a 20 hs y
                  Domingos de 14 a 20 hs(*)
                </Text>
              </li>
            </ul>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              opacity={0.3}
              primary
              customStyle={styles.more_articleMax}
            >
              (*) Los horarios pueden modificarse según fechas de feriados nacionales y/o
              requerimientos de la marca.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Cuál es el horario de entrega?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              El servicio de Correo Argentino a domicilio se realiza entre las 8 y 18 hs de Lunes a
              Sábados. No se podrá acordar un horario específico de entrega. No se efectúan entregas
              los feriados nacionales ó en días de paro gremial. En tanto, el servicio de Entrega
              Express, deberá ser acordado con nosotros. Una vez coordinado el envío, la entrega
              será efectiva en un plazo de tres horas como máximo.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Mi pedido puede ser recibido por otra persona?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Si, Siempre y cuando la misma acredite su identidad al momento de la recepción con
              DNI. Además deberá contar consigo el Documento de Identidad del responsable de la
              compra ó una fotocopia legible del mismo.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Qué sucede si no estoy en mi casa cuando traen mi pedido?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Todos los pedidos de Correo Argentino con destino final un domicilio particular se
              rigen de la siguiente manera: se realiza una primera visita y en caso de no estar
              presente el titular de la compra o una persona autorizada, se dejará aviso de visita
              para realizar una nueva visita el próximo día. En caso de que nadie se encuentre al
              momento de la segunda visita, el pedido será enviado a la sucursal de Correo Argentino
              más cercana. Este pedido permanecerá allí durante los próximos 4 días para que pueda
              ser retirado personalmente por el destinatario. Vencido este período, el pedido
              volverá a nuestras oficinas. En esta instancia, se deberá concretar un nuevo envío que
              deberá ser abonado por el cliente.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Cómo puedo consultar el seguimiento de mi pedido?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Cuando el pedido sea empaquetado, recibirás por e-mail de nuestro encargado de nuestro
              e-shop, el código de tracking o seguimiento proporcionado por Correo Argentino que te
              permitirá conocer la posición exacta del paquete.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              Quiero cancelar mi pedido, ¿qué debo hacer?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Los pedidos pueden ser cancelados hasta el momento que son empaquetados. Generalmente
              las primeras 24 horas una vez confirmada la compra. Deberás enviar un correo a
              dirtydemon404@gmail.com con el Número de Orden, tus datos e ítem/s de la compra. Tené
              en cuenta que una vez procesado el pago, el proceso de devolución de dinero puede
              demorar algunos días (dependiendo el método de pago). La cancelación de un pedido ya
              despachado se considera una devolución.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              Si mi pedido no llega en el tiempo estipulado, ¿cómo reclamo?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Bastará con que nos escribas a dirtydemon404@gmail.com Indicando el Número de Orden,
              tus datos e ítem/s de la compra.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Qué pasa con toda la información personal que cargué en la página web?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              DIRTY DEMON se compromete a conservar la política de confidencialidad con el objetivo
              de proteger la privacidad de la información personal obtenida a través de su página,
              de acuerdo a la Ley Argentina de Habeas Data (Ley. 25.326). Esto significa que tus
              datos no serán compartidos, vendidos o alquilados a ninguna empresa, y que podrás
              consultarlos cuando quieras. Gracias por confiar en Dirty Demon.
            </Text>
          </div>
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              ¿Qué hago si encuentro problemas técnicos en su e-shop?
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              Por favor, escribinos a dirtydemon404@gmail.com.
            </Text>
          </div>
        </ContentWithTitle>
      </article>
      <article className={styles.more_article}>
        <ContentWithTitle title="POLICY">
          <div className={styles.question}>
            <Text priority={3} size={14} color="white" align="left" opacity={0.3} primary>
              En el caso de requerir un cambio
            </Text>

            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              customStyle={styles.more_articleMax}
            >
              En caso de querer cambiar un producto, no podrás hacerlo por otra prenda y menos si
              está agotada. Las prendas de DIRTY DEMON son únicas y exclusivas y es por eso que no
              se podrán cambiar por un artículo de un drop de otra season. <br /> <br />
              Una vez llegado el producto y dudaste del talle no tirar la bolsa con la que vino ya
              que tiene que venir en la misma bolsa al punto de destino. Si no tiene que ser una
              bolsa igual. <br /> <br />
              El cambio se puede realizar hasta 7 días después de haber recibido el pedido. En caso
              de que no tengamos talle de la prenda, te devolveremos el dinero por medio de Mercado
              Pago. <br /> <br />
              El metodo de devolucion sera indicada por parte del Staff.
            </Text>
          </div>
        </ContentWithTitle>
      </article>
      <article className={styles.more_article}>
        <ContentWithTitle title="SAFETY">
          <div className={styles.question}>
            <div className={styles.safety}>
              <Icon type="care1" customWidth="75px" />
              <Icon type="care2" customWidth="58px" />
              <Icon type="care3" customWidth="62px" />
              <Icon type="care4" customWidth="90px" />
            </div>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              primary
              customStyle={styles.more_safety}
              opacity={0.2}
            >
              PRENDA ESTILO OVERSIZE.
              <br />
              MATERIAL 100% ALGODON.
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              primary
              customStyle={styles.more_safety}
            >
              RECOMENDACIONES DE LAVADO
            </Text>
            <Text
              priority={3}
              size={14}
              color="white"
              align="left"
              primary
              customStyle={styles.more_safety}
            >
              APTO LAVARROPAS. <br /> LAVAR CON AGUA FRIA (40º O MENOS) <br /> PREFERENTEMENTE A
              MANO. <br /> <br /> NO USAR CLORO DURANTE SU LAVADO. <br /> NO SECAR EN SECARROPA.{" "}
              <br />
              <br />
              LAVAR Y PLANCHAR DEL REVERSO. <br /> NUNCA SOBRE LA ESTAMPA.
            </Text>
          </div>
        </ContentWithTitle>
      </article>
    </motion.main>
  );
};

export default More;
