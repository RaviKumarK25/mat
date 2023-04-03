import React from "react";

const Gender = ({ gender, handleRegisterChange, genderError }) => {
  return (
    <>
      <select
        name="gender"
        value={gender}
        onChange={handleRegisterChange}
        class="with-border myInputStyl"
      >
        <option>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </>
  );
};

export default Gender;
