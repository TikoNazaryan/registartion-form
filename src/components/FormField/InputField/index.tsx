import React from "react";
import { IInputField } from "./../../../interfaces/form";

import "./styles.css";

const InputField : React.FC<IInputField> = ({
  type,
  name,
  handleChange,
  handleBlur,
  value,
  placeholder,
  icon
}) =>  <div className="text-field">
    {icon && <img src={`./icons/${icon}.svg`} alt={icon}/>}
    <input
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      placeholder={placeholder}
    />
  </div>;

export default InputField;
