import { useField, ErrorMessage } from "formik";
import React from "react";

const RegisterInput = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="input_error">
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>

      <input
        type={field.type}
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "input_error_border with-border myInputStyl spin-button-none"
            : "with-border myInputStyl spin-button-none"
        }
      />
    </>
  );
};

export default RegisterInput;
