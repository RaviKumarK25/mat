import React, { useState } from "react";

import Select from "react-select";
import { customStyles } from "../../staticDatas";

const HeightSelector = ({
  value,
  onChange,
  options,
  placeholder,
  maxMenuHeight,
  name,
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
        name={name}
      />
    </>
  );
};

export default HeightSelector;
