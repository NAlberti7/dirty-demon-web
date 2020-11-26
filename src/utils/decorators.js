import { store } from "../store/index";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

//1.4fontsize

export const withProvider = (story) => <ProviderWrapper store={store}>{story()}</ProviderWrapper>;
