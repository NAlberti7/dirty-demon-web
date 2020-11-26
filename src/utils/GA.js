import ReactGA from "react-ga";

export const GAHandler = (category, action, value) => {
  ReactGA.event({
    category: category,
    action: action,
    value: value ? value : null,
  });
};
