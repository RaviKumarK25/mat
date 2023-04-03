import { useField, ErrorMessage } from "formik";
import React from "react";

const TextArea = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="input_error">
        {meta.touched && meta.error && <ErrorMessage name={field.name} />}
      </div>

      <textarea
        name={field.name}
        placeholder={placeholder}
        {...field}
        {...props}
      ></textarea>
    </>
  );
};

export default TextArea;
