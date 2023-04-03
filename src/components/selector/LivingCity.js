import axios from "axios";
import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { citiesReducer, countriesReducer } from "../../functions/reducers";
import { customStyles } from "../../staticDatas";

const LivingCity = ({
  value,
  onChange,
  selectedLivingState,
  selectedLivingCountry,
  selectedLivingCity,
  maxMenuHeight,
  name,
}) => {
  const { user } = useSelector((state) => ({ ...state }));

  const [{ loadingCity, errorCity, cities }, dispatchCity] = useReducer(
    citiesReducer,
    {
      loading: false,
      cities: [],
      error: "",
    }
  );

  const getAllCities = async () => {
    try {
      dispatchCity({
        type: "CITY_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllCities/${selectedLivingCountry.value}/${selectedLivingState.value}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatchCity({
        type: "CITY_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatchCity({
        type: "CITY_ERROR",
        payload: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    getAllCities();
  }, [selectedLivingCountry, selectedLivingState]);

  const cityOptionsLiving = cities.map((getCity) => ({
    value: getCity.city_name,
    label: getCity.city_name,
  }));

  console.log(selectedLivingCity);
  return (
    <>
      <Select
        onChange={onChange}
        options={cityOptionsLiving}
        placeholder="Select City"
        styles={customStyles}
        value={value}
        maxMenuHeight={maxMenuHeight}
        name={name}
      />
    </>
  );
};

export default LivingCity;
