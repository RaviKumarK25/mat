import React from "react";

import Select from "react-select";
import { customStyles } from "../../staticDatas";

const GroupSelector = ({
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
        styles={customStyles}
        placeholder={placeholder}
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

export default GroupSelector;
