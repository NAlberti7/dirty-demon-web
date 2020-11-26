import * as actionTypes from "../actions/types";
import axios from "../../axios";

export const setMailingResult = (message) => {
  return {
    type: actionTypes.SET_MAILING_RESULT,
    payload: message,
  };
};

export const setTrackingResult = (message) => {
  return {
    type: actionTypes.SET_TRACKING_RESULT,
    payload: message,
  };
};

export const postSendMail = (data) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "/mail/contact",
      data: data,
      headers: {
        Authorization: "Basic DD2020616",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        dispatch(setMailingResult("CONSULTA ENVIADA"));
      })
      .catch((error) => {
        dispatch(setMailingResult("OCURRIO UN ERROR, PRUEBA MAS TARDE"));
      });
  };
};

export const postSendTracking = (data) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: "/mail/tracking",
      data: data,
      headers: {
        Authorization: "Basic DD2020616",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        dispatch(setTrackingResult(response.data.msg));
      })
      .catch((error) => {
        dispatch(setTrackingResult("OCURRIO UN ERROR, PRUEBA MAS TARDE"));
      });
  };
};

export const sendToItemView = (item) => {
  return {
    type: actionTypes.SEND_TO_ITEM_VIEW,
    payload: item,
  };
};

export const setItemByColor = (id) => {
  return {
    type: actionTypes.SET_ITEM_COLOR,
    payload: id,
  };
};

export const getPaymentsFromML = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.mercadolibre.com/sites/MLA/payment_methods?marketplace=NONE&operation_type=recurring_payment"
      )
      .then((response) => {
        dispatch({
          type: actionTypes.GET_PAY_METHODS,
          payload: response.data,
        });
      });
  };
};

export const getItems = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: "/items",
      headers: {
        Authorization: "Basic DD2020616",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        dispatch({ type: actionTypes.GET_ITEMS, payload: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const getItem = (id, history) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: `/items/${id}`,
      headers: {
        Authorization: "Basic DD2020616",
      },
    })
      .then((response) => {
        console.log(response.data.data);
        dispatch(sendToItemView(response.data.data));
      })
      .catch((error) => {
        console.log(error.response);
        history.push("/store");
      });
  };
};

export const setShopHover = () => {
  return {
    type: actionTypes.SET_SHOP_HOVER,
  };
};

export const dismissShopHover = () => {
  return {
    type: actionTypes.DISMISS_SHOP_HOVER,
  };
};

export const setColor = (_id, color) => {
  return {
    type: actionTypes.SET_COLOR,
    payload: { _id, color },
  };
};

export const showPreviewModal = () => {
  return {
    type: actionTypes.SHOW_PREVIEW_MODAL,
  };
};

export const dismissPreviewModal = () => {
  return {
    type: actionTypes.DISMISS_PREVIEW_MODAL,
  };
};

export const setPreviewModalImages = (images) => {
  return {
    type: actionTypes.SET_PREVIEW_MODAL_IMAGES,
    payload: images,
  };
};

export const setPreviewModalInfo = (info) => {
  return {
    type: actionTypes.SET_PREVIEW_MODAL_INFO,
    payload: info,
  };
};

export const openNav = () => {
  return {
    type: actionTypes.OPEN_NAV,
  };
};

export const closeNav = () => {
  return {
    type: actionTypes.CLOSE_NAV,
  };
};

export const openDetailsModal = () => {
  return {
    type: actionTypes.OPEN_DETAIL_MDOAL,
  };
};

export const closeDetailsModal = () => {
  return {
    type: actionTypes.CLOSE_DETAIL_MDOAL,
  };
};

export const openSizeModal = () => {
  return {
    type: actionTypes.OPEN_SIZE_MDOAL,
  };
};

export const closeSizeModal = () => {
  return {
    type: actionTypes.CLOSE_SIZE_MDOAL,
  };
};
