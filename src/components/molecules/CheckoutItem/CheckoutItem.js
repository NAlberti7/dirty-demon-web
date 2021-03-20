import React from "react";
import styles from "./CheckoutItem.module.scss";
import ActionButton from "../ActionButton/ActionButton";
import Text from "../../atoms/Text/Text";
import { connect } from "react-redux";
import {
  addItemQuantity,
  removeItemQuantity,
  removeItemCart,
} from "../../../store/actions/cartActions";

const CheckoutItem = ({
  item,
  addItemQuantity,
  removeItemQuantity,
  removeItemCart,
  index,
  isMobile,
}) => {
  const { name, size, color, price, quantity, ship_image, shipping, itemPicture } = item;
  return (
    <div className={styles.checkoutItem}>
      {isMobile && (
        <ActionButton
          type='close'
          customStyle={styles.checkoutItem_close}
          clickHandler={() => removeItemCart(item._id, size, index)}
        />
      )}
      <div className={styles.checkoutItem_image}>
        <img src={itemPicture.front} />
      </div>
      <div className={styles.checkoutItem_info}>
        <div className={styles.checkoutItem_infoItem}>
          <Text tag="span"  size={14} color='white' align='left' opacity={0.5}>
            PRENDA
          </Text>
          <Text tag="span"  size={14} color='white' align='right'>
            {name}
          </Text>
        </div>
        <div className={styles.checkoutItem_infoItem}>
          <Text tag="span"  size={14} color='white' align='left' opacity={0.5}>
            COLOR
          </Text>
          <Text tag="span"  size={14} color='white' align='right'>
          {color.toUpperCase()}
          </Text>
        </div>
        <div className={styles.checkoutItem_infoItem}>
          <Text tag="span"  size={14} color='white' align='left' opacity={0.5}>
            TALLE
          </Text>
          <Text tag="span"  size={14} color='white' align='right'>
          {size.toUpperCase()}
          </Text>
        </div>
        <div className={`${styles.checkoutItem_infoItem} ${styles.price}`}>
          <Text tag="span"  size={14} color='white' align='left' opacity={0.5}>
            PRECIO
          </Text>
          <Text tag="span"  size={14} color='white' align='right'>
          ${price}
          </Text>
        </div>
        
        
   
        <div className={styles.checkoutItem_quantity}>
          <ActionButton
            type='min'
            clickHandler={() => removeItemQuantity(item._id, index)}
            customStyle={styles.action}
          />
          <div className={styles.checkoutItem_quantityContainer}>
            <Text priority={3} size={14} color='white' align='left' weight='light'>
              {quantity}
            </Text>
          </div>
          <ActionButton
            type='plus'
            clickHandler={() => addItemQuantity(item._id, index)}
            customStyle={styles.action}
          />
          {!isMobile && (
            <div
              className={styles.checkoutItem_delete}
              onClick={() => removeItemCart(item._id, size, index)}
            >
              <Text tag='span' size={14} color='white' align='left'>
                ELIMINAR
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addItemQuantity, removeItemQuantity, removeItemCart })(CheckoutItem);
