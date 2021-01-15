import React, { useEffect, useState, useRef } from "react";
import { ISelectField } from "./../../../interfaces/form";
import "./styles.css";

const SelectField : React.FC<ISelectField> = ({
  name,
  setFieldValue,
  value,
  placeholder,
  options
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick)
    return () => document.removeEventListener("click", handleOutsideClick)
  })

  useEffect(() => setIsFocus(false) , [value])

  const getOptions = () => options.map(option => <div className="option" key={option.code} onClick={() => handleSelectedOption(option.name)}>{option.name}</div>)
  
  const handleOutsideClick = (e: any) => {
    if (ref && ref.current && !ref.current.contains(e.target)) setIsFocus(false);
  }

  const handleSelectedOption = (country: string) => {
    if(country === value) setIsFocus(false);
    else setFieldValue(name, country); 
  }
 
  const handleTriggerClick = () => setIsFocus(true);

  return <div className="select-field" ref={ref}>
      <div className={"trigger " + (value ? "value" : "placeholder")} onClick={handleTriggerClick}>
        {value ? value : placeholder}
      </div>
      {isFocus && <div className="dropdown">
        {getOptions()}
      </div>}
    </div>;
}

export default SelectField;
