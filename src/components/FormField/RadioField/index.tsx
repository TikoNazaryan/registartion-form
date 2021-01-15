import React from "react";
import { IRadioField } from "../../../interfaces/form";

import "./styles.css";

const RadioField : React.FC<IRadioField> = ({
    type, 
    name, 
    options, 
    handleChange, 
    handleBlur
  }) =>  {

  return <div className="radio-field">
      {options.map((option, index) => <label key={index} >
          <input 
            type={type}
            name={name}
            value={index}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="beautified"></div>
          <span>{option}</span>
        </label>
      )}
    </div>
};

export default RadioField;
