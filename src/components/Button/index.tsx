import React from "react";
import { IButton } from "./../../interfaces/form";
import "./styles.css";

const Button : React.FC<IButton> = ({
  text,
  type,
  dirty,
  isValid,
  isSubmitting
}) => {
  return <button type={type} disabled={!(dirty && isValid)}>
    {isSubmitting? <img src="./icons/loading.svg" alt="Loading..."/> : text}
  </button>;
}

export default Button;
