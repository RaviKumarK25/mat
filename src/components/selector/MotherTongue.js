import React, { useState } from "react";

import Select from "react-select";
import { customStyles } from "../../staticDatas";

const MotherTongue = ({
  value,
  onChange,
  options,
  placeholder,
  maxMenuHeight,
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
        maxMenuHeight={maxMenuHeight}
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        isClearable={isClearable}
        name={name}
        getOptionValue={getOptionValue}
      />
    </>
  );
};

export default MotherTongue;
