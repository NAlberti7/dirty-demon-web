import * as actionTypes from "../actions/types";
import axios from "../../axios";
import axios2 from "axios";

export const setError = (message) => {
  return {
    type: actionTypes.SET_ERROR,
    payload: message,
  };
};

export const dismissError = () => {
  return {
    type: actionTypes.CLEAN_ERROR,
  };
};

export const setSubmit = () => {
  return {
    type: actionTypes.SET_SUBMIT,
  };
};

export const dismissSubmit = () => {
  return {
    type: actionTypes.DISMISS_SUBMIT,
  };
};

export const setPayerInfo = (body, sendType, URL, shipments) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "/payers",
      data: { payer: body.payer, items: body.items, sendType: sendType, shipments: shipments },
      headers: {
        Authorization: "Basic DD2020616",
      },
    })
      .then((response) => {
        window.location.href = `${URL}`;
        dispatch(dismissSubmit());
      })
      .catch((error) => {});
  };
};

export const loadingHandler = (bool) => {
  return {
    type: actionTypes.LOADING_HANDLER,
    payload: bool,
  };
};

export const calculatePrice = () => {
  return {
    type: actionTypes.CALCULATE_PRICE,
  };
};
export const getDashboardProjects = () => (dispatch) => {
  let authToken = localStorage.getItem("access-Token-Edify");
  let bearerToken = { headers: { Authorization: `Bearer ${authToken}` } };

  axios
    .get("/proyecto/search", bearerToken)
    .then((res) => {
      dispatch({
        type: "",
        payload: res.data.content,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const showCart = () => {
  return {
    type: actionTypes.SHOW_CART,
  };
};

export const showFiveMore = (data) => {
  return {
    type: "actionTypes.SHOW_FIVE_MORE",
  };
};

export const addItemCart = (item) => {
  return {
    type: actionTypes.ADD_ITEM_CART,
    payload: { ...item, quantity: 1 },
  };
};

export const addItemQuantity = (itemId, index) => {
  return {
    type: actionTypes.ADD_ITEM_QUANTITY,
    payload: { itemId: itemId, index: index },
  };
};

export const removeItemQuantity = (itemId, index) => {
  console.log(itemId, index);
  return {
    type: actionTypes.REMOVE_ITEM_QUANTITY,
    payload: { itemId: itemId, index: index },
  };
};

export const removeItemCart = (itemId, itemSize, index) => {
  return {
    type: actionTypes.REMOVE_ITEM_CART,
    payload: { id: itemId, size: itemSize, index: index },
  };
};

export const payToMercadoPago = (items, payer, sendType, sendValue) => {
  const {
    name,
    lastName,
    email,
    tel,
    address,
    addressNumber,
    zipCode,
    addressOptional,
    province,
    locality,
  } = payer;
  let envio = null;
  let shippingConfig = {};
  let additional_info = "";
  if (sendType === "GRATIS") {
    shippingConfig = {};
  } else if (sendType === "ENVIO EXPRESS") {
    shippingConfig = {
      address,
      addressNumber,
      addressOptional,
      zipCode,
      province,
      locality,
    };

    additional_info = `${address} ${addressNumber} ${addressOptional}, ${zipCode}, ${locality}, ${province}`;

    envio = {
      id: `Envio-${sendValue}`,
      category_id: `Envio-${sendValue}`,
      unit_price: sendValue,
      quantity: 1,
      price: sendValue,
      description: `Envio`,
      title: `Envio`,
    };
  }

  let sendItems = items.map((item) => {
    let sendItemID = item.stock.find((value) => {
      return value.size === item.size;
    });
    return {
      ...item,
      id: sendItemID._id,
      category_id: item._id,
      unit_price: item.price,
      description: item.name,
      title: item.name,
    };
  });

  if (sendType === "ENVIO EXPRESS") {
    sendItems.push(envio);
  }

  return (dispatch) => {
    let URL;
    const body = {
      items: sendItems,
      payer: {
        name: name,
        surname: lastName,
        email: email,
        phone: {
          area_code: "11",
          number: Number(tel),
        },
        address: {
          street_name: address || "",
          street_number: Number(addressNumber || ""),
          " zip_code": zipCode || "",
        },
      },
      additional_info: additional_info,
    };

    axios({
      method: "post",
      url: "/mercadopago",
      data: body,
      headers: {
        Authorization: "Basic DD2020616",
      },
    })
      .then((response) => {
        URL = response.data.msg;
        dispatch(setPayerInfo(body, sendType, URL, shippingConfig));
        console.log(response.data.msg);
      })
      .catch((error) => {
        dispatch(setError("REVISA LOS DATOS INGRESADOS"));
        dispatch(dismissSubmit());
      });
  };
};
export const calculateZipCode = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch({ type: actionTypes.IS_REQUESTING_SEND });
    axios({
      method: "post",
      url: "/orders/budget",
      data: data,
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: actionTypes.SET_SEND_VALUE,
          payload: response.data.data.price,
        });
      })
      .catch((error) => {
        console.log(error.response);
        dispatch({
          type: actionTypes.SET_SEND_VALUE,
          payload: "CODIGO POSTAL INVALIDO",
        });
      });
  };
};

export const setUserInfo = (data) => {
  return {
    type: actionTypes.SET_USER_INFO,
    payload: data,
  };
};

export const setSendType = (type) => {
  return {
    type: actionTypes.SET_SEND_TYPE,
    payload: type,
  };
};

export const setChooseSendValue = (value) => {
  return {
    type: actionTypes.SET_CHOOSE_SEND_VALUE,
    payload: value,
  };
};
