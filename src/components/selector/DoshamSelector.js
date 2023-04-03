import React from "react";

import Select from "react-select";
import { customStyles } from "../../staticDatas";

const DoshamSelector = ({ value, onChange, options, placeholder, name }) => {
  return (
    <>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        maxMenuHeight={220}
        name={name}
      />
    </>
  );
};

export default DoshamSelector;
