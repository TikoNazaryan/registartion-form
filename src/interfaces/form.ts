export interface formValues {
  name: string,
  email: string,
  password: string,
  country: string,
  gender: string,
  terms: boolean
}

export interface IFormField {
  type: string,
  name: string,
  params: any,
}

export interface IInputField {
  name: string,
  type: string,
  value: string,
  placeholder: string,
  handleChange: (e: Object) => void,
  handleBlur: (e: Object) => void,
  icon?: string,
}

interface ISelectOption {
  name: string,
  code: string,
}

export interface ISelectField {
  name: string,
  type: string,
  placeholder: string,
  value: string,
  options: ISelectOption[],
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
}

export interface IRadioField {
  name: string,
  type: string,
  handleChange: (e: Object) => void,
  handleBlur: (e: Object) => void,
  value: string,
  options: string[]
}

export interface ITerms{
  value: boolean,
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void,
  handleBlur: (e: Object) => void,
}

export interface IButton {
  type: "submit" | "button" | "reset",
  text: string,
  dirty: boolean,
  isValid: boolean,
  isSubmitting: boolean
}
