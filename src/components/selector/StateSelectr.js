import axios from "axios";
import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { countriesReducer, statesReducer } from "../../functions/reducers";
import { customStyles } from "../../staticDatas";

const StateSelectr = ({
  selectedCountry,
  handleStates,
  selectedState,
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
        `${process.env.REACT_APP_BACKEND_URL}/getAllStates/${selectedCountry}`,
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
  }, [selectedCountry]);

  const stateOptions = states.map((getState) => ({
    value: getState.state_isoCode,
    label: getState.state_name,
  }));

  return (
    <>
      <Select
        options={stateOptions}
        placeholder="Select State"
        styles={customStyles}
        defaultValue={"Select Country"}
        value={selectedState}
        onChange={handleStates}
        maxMenuHeight={210}
        name={name}
      />
    </>
  );
};

export default StateSelectr;
