import React from "react";
import { Formik, Form } from "formik";
import { initialValues , validationSchema, countryList} from "./../FormField/formHelpers";
import { formValues } from "./../../interfaces/form";
import FormField from "../FormField";
import Button from "../Button"; 
import Terms from "../Terms";

import "./styles.css";

const Content : React.FC = () => {
  const onSubmit = (values: formValues, { setSubmitting }: any) => {
    setTimeout(() => setSubmitting(false), 10000);
  }

  return <div className="form">
    <h1>Create a new account</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur, 
        values, 
        setFieldValue,
        dirty,
        isValid,
        isSubmitting
      }) => (
        <Form>
          <FormField 
            type="text"
            name="name"
            params={{
              handleChange: handleChange,
              handleBlur: handleBlur,
              value: values.name,
              placeholder: "Enter Your Name",
            }}
          />
          <FormField 
            name="email"
            type="email"
            params={{
              handleChange: handleChange,
              handleBlur: handleBlur,
              value: values.email,
              placeholder: "Email",
              icon: "email"
            }}
          />
          <FormField 
            name="password"
            type="password"
            params={{
              handleChange: handleChange,
              handleBlur: handleBlur,
              value: values.password,
              placeholder: "Password",
              icon: "password"
            }}
          />
          <FormField 
            name="country"
            type="select"
            params={{
              setFieldValue: setFieldValue,
              value: values.country,
              placeholder: "Select Country",
              options: countryList,
            }}
          />
          <FormField 
            name="gender"
            type="radio"
            params={{
              handleChange: handleChange,
              handleBlur: handleBlur,
              value: values.gender,
              options: ["Male", "Female"]
            }}
          />

          <Terms
            value={values.terms}
            setFieldValue={setFieldValue}
            handleBlur={handleBlur}
          />
          
          <Button
            type="submit"
            text="Sign Up"
            dirty={dirty}
            isValid={isValid}
            isSubmitting={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  </div>;
}

export default Content;