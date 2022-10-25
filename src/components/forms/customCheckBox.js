import { Field } from "formik";
import React from "react";
import '../../assets/css/checkBox.css'
export function Checkbox(props) {
  return (
    <>
      <label className="checkbox-block">
        <Field className='checkbox-item' type="checkbox" name={props.name}></Field>
        <span className="checkbox-span">{props.name}</span>
      </label>


    </>
  );
}