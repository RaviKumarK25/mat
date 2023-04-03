import axios from "axios";
import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { countriesReducer } from "../../functions/reducers";
import { customStyles } from "../../staticDatas";

const CountrySelector = ({ handleCountry, selectedCountry, name }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [{ loading, error, countries }, dispatchss] = useReducer(
    countriesReducer,
    {
      loading: false,
      countries: [],
      error: "",
    }
  );

  const getAllCountries = async () => {
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

  const countryOptions = countries.map((d) => ({
    value: d.country_isoCode,
    label: d.country_name,
  }));

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <Select
        options={countryOptions}
        placeholder="Select Country"
        styles={customStyles}
        onChange={handleCountry}
        value={selectedCountry}
        maxMenuHeight={210}
        name={name}
      />
    </>
  );
};

export default CountrySelector;
