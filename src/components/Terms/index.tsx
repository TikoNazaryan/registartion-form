import React from "react";
import { ErrorMessage } from 'formik';
import { ITerms } from "../../interfaces/form";

import "./styles.css";

const InputField: React.FC<ITerms> = ({
  value,
  setFieldValue,
  handleBlur,
}) => {

 const handleChange = (e: any) => setFieldValue("terms", e.target.checked);

  return <div className="terms">
    <label>
      <input 
        name="terms"
        type="checkbox"
        onChange={handleChange}
        onBlur={handleBlur}
        checked={value}
      />
      <div className="beautified"></div>
      Accept <a href="http://localhost:3000/#"> terms </a>and <a href="http://localhost:3000/#">conditions</a>
    </label>
    <ErrorMessage name="terms">{msg => <div className="error">{msg}</div>}</ErrorMessage>
  </div>
};

export default InputField;
