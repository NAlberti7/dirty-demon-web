import React from "react";

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} autoComplete='off'>
    {children}
  </form>
);

export default Form;
