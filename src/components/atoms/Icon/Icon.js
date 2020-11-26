import React from "react";
import styles from "./Icon.module.scss";
import { ReactComponent as Danger } from "../../../assets/images/DangerLogo.svg";
import { ReactComponent as Dirty } from "../../../assets/images/DirtyLogo.svg";
import { ReactComponent as Guide } from "../../../assets/images/guia.svg";
import { ReactComponent as QR } from "../../../assets/images/QRlogo.svg";
import { ReactComponent as Tracking } from "../../../assets/images/TrackingLogo.svg";
import { ReactComponent as World } from "../../../assets/images/WorldLogo.svg";
import { ReactComponent as Bag } from "../../../assets/images/bag.svg";
import { ReactComponent as Arrow } from "../../../assets/images/arrow.svg";
import { ReactComponent as BuyCard } from "../../../assets/images/buy-card.svg";
import { ReactComponent as CartMobile } from "../../../assets/images/cart.svg";
import { ReactComponent as Burger } from "../../../assets/images/burger.svg";
import { ReactComponent as Care1 } from "../../../assets/images/care-1.svg";
import { ReactComponent as Care2 } from "../../../assets/images/care-2.svg";
import { ReactComponent as Care3 } from "../../../assets/images/care-3.svg";
import { ReactComponent as Care4 } from "../../../assets/images/care-4.svg";

const Icon = ({ type, opacity, big, customWidth, mid }) => {
  const SetIcon = () => {
    switch (type) {
      case "danger":
        return <Danger className={styles.icon} style={{ opacity: opacity || 1 }} />;
      case "care1":
        return (
          <Care1
            className={styles.icon}
            style={{ opacity: opacity || 1, width: customWidth ? customWidth : "" }}
          />
        );
      case "care2":
        return (
          <Care2
            className={styles.icon}
            style={{ opacity: opacity || 1, width: customWidth ? customWidth : "" }}
          />
        );
      case "care3":
        return (
          <Care3
            className={styles.icon}
            style={{ opacity: opacity || 1, width: customWidth ? customWidth : "" }}
          />
        );
      case "care4":
        return (
          <Care4
            className={styles.icon}
            style={{ opacity: opacity || 1, width: customWidth ? customWidth : "" }}
          />
        );
      case "cartmobile":
        return (
          <CartMobile
            className={styles.icon}
            style={{ opacity: opacity || 1 }}
            style={{ width: customWidth ? customWidth : "" }}
          />
        );
      case "burger":
        return (
          <Burger
            className={styles.icon}
            style={{ opacity: opacity || 1 }}
            style={{ width: customWidth ? customWidth : "" }}
          />
        );
      case "buy":
        return (
          <BuyCard
            className={styles.icon}
            style={{ opacity: opacity || 1 }}
            style={{ width: customWidth ? customWidth : "" }}
          />
        );
      case "bag":
        return (
          <Bag
            className={styles.icon}
            style={{ opacity: opacity || 1 }}
            style={{ width: customWidth ? customWidth : "" }}
          />
        );
      case "arrow":
        return (
          <Arrow
            className={styles.icon}
            style={{ opacity: opacity || 1 }}
            style={{ width: customWidth ? customWidth : "" }}
          />
        );
      case "dirty":
        return (
          <Dirty
            className={`${styles.icon} ${big && styles.big} ${mid && styles.mid}`}
            style={{ opacity: opacity || 1 }}
          />
        );
      case "guide":
        return <Guide className={styles.icon} style={{ opacity: opacity || 1 }} />;
      case "qr":
        return <QR className={styles.icon} style={{ opacity: opacity || 1 }} />;
      case "tracking":
        return <Tracking className={styles.icon} style={{ opacity: opacity || 1 }} />;
      case "world":
        return <World className={styles.icon} style={{ opacity: opacity || 1 }} />;
      default:
        return null;
    }
  };

  return SetIcon();
};

export default Icon;
