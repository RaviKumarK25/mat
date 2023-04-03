import axios from "axios";
import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { countriesReducer, statesReducer } from "../../functions/reducers";
import { customStyles } from "../../staticDatas";

const LivingState = ({
  value,
  onChange,
  selectedLivingCountry,
  maxMenuHeight,
  name,
}) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [{ loadingState, errorState, states }, dispatch] = useReducer(
    statesReducer,
    {
      loading: false,
      states: [],
      error: "",
    }
  );

  const getAllStates = async () => {
    try {
      dispatch({
        type: "STATE_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllStates/${selectedLivingCountry.value}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "STATE_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "STATE_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    getAllStates();
  }, [selectedLivingCountry]);

  const stateOptionsLiving = states.map((getState) => ({
    value: getState.state_isoCode,
    label: getState.state_name,
  }));

  return (
    <>
      <Select
        options={stateOptionsLiving}
        placeholder="Select State"
        styles={customStyles}
        defaultValue={"Select Country"}
        value={value}
        onChange={onChange}
        maxMenuHeight={maxMenuHeight}
        name={name}
      />
    </>
  );
};

export default LivingState;
