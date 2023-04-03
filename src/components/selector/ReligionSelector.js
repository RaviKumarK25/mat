import React from "react";

import Select from "react-select";
import { customStyles } from "../../staticDatas";

const ReligionSelector = ({
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

export default ReligionSelector;
