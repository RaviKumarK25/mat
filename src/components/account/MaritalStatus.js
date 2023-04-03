import React from "react";

const MaritalStatus = ({ marital, handleRegisterChange, maritalError }) => {
  return (
    <>
      <select
        name="marital"
        value={marital}
        onChange={handleRegisterChange}
        class="with-border myInputStyl"
      >
        <option>Marital Status</option>
        <option>Not Married</option>
        <option>Divorce</option>
      </select>
    </>
  );
};

export default MaritalStatus;
