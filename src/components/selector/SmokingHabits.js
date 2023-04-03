import React, { useState } from "react";

import Select from "react-select";
import { customStyles } from "../../staticDatas";

const SmokingHabits = ({
  value,
  onChange,
  options,
  placeholder,
  maxMenuHeight,
  menuPlacement,
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
        menuPlacement={menuPlacement}
        name={name}
      />
    </>
  );
};

export default SmokingHabits;
