import React from "react";

import Select from "react-select";
import { customStyles } from "../../staticDatas";

const EmployedIn = ({
  value,
  onChange,
  options,
  placeholder,
  isMulti,
  closeMenuOnSelect,
  isClearable,
  name,
  getOptionValue,
}) => {
  return (
    <>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        maxMenuHeight={220}
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        isClearable={isClearable}
        name={name}
        getOptionValue={getOptionValue}
      />
    </>
  );
};

export default EmployedIn;
