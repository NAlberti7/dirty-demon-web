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
        <Text priority={2} primary size={15} color='white' align='left'>
          {name}
        </Text>

        <Text priority={3} size={15} color='white' align='left' weight='light'>
          COLOR {color.toUpperCase()}
        </Text>
        <Text priority={3} size={15} color='white' align='left' weight='light'>
          TALLE {size.toUpperCase()}
        </Text>
        <div className={styles.checkoutItem_quantity}>
          <ActionButton
            type='min'
            clickHandler={() => removeItemQuantity(item._id, index)}
            customStyle={styles.action}
          />
          <div className={styles.checkoutItem_quantityContainer}>
            <Text priority={3} size={15} color='white' align='left' weight='light'>
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
              <Text tag='span' size={15} color='orange' align='left'>
                RETIRAR
              </Text>
            </div>
          )}
        </div>
        <Text priority={3} primary size={15} color='white' align='left'>
          ${price}
        </Text>
      </div>
    </div>
  );
};

export default connect(null, { addItemQuantity, removeItemQuantity, removeItemCart })(CheckoutItem);
