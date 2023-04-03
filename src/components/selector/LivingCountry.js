import axios from "axios";
import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { countriesReducer } from "../../functions/reducers";
import { customStyles } from "../../staticDatas";

const LivingCountry = ({ value, onChange, maxMenuHeight, name }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [{ loading, error, countries }, dispatchss] = useReducer(
    countriesReducer,
    {
      loading: false,
      countries: [],
      error: "",
    }
  );

  const getAllLivingCountries = async () => {
    try {
      dispatchss({
        type: "COUNTRY_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllCountries`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatchss({
        type: "COUNTRY_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatchss({
        type: "COUNTRY_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  const countryOptionsLiving = countries.map((d) => ({
    value: d.country_isoCode,
    label: d.country_name,
  }));

  useEffect(() => {
    getAllLivingCountries();
  }, []);

  return (
    <>
      <Select
        options={countryOptionsLiving}
        placeholder="Select Country"
        styles={customStyles}
        onChange={onChange}
        value={value}
        maxMenuHeight={maxMenuHeight}
        name={name}
      />
    </>
  );
};

export default LivingCountry;
