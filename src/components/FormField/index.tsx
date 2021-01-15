import React from "react";
import { ErrorMessage } from "formik";
import { IFormField } from "./../../interfaces/form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

import "./styles.css";

const FormField : React.FC<IFormField> = (props) => {
  const { type, name, params } = props;

  const getFieldByType = () => {
    switch(type)
    {
      case "text":
      case "email":
      case "password":
        return <InputField 
            type={type}
            name={name}
            {...params}
          />
      case "select":
        return <SelectField 
          type={type}
          name={name}
          {...params}
        />
      case "radio":
      case "checkbox":
        return <RadioField 
          type={type}
          name={name}
          {...params}
        />
      default: return null;
    }
  }


  return <div className="form-field">
      <label>
        {getFieldByType()}
        <ErrorMessage name={name}>{msg => <div className="error">{msg}</div>}</ErrorMessage>
      </label>
    </div>
}

export default FormField;
