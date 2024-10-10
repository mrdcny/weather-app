"use client";
import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import defaultStates from "@/app/utils/defaultStates";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState();
  const [weather, setWeather] = useState();
  const [activeLocation, setActiveLocation] = useState(defaultStates);

  const fetchForecast = async (lat, lon) => {
    try {
      const res = await axios.get(`/api/forecast?lat=${lat}&lon=${lon}`);
      setForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  const fetchWeather = async (lat, lon) => {
    try {
      const res = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
      setWeather(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };

  useEffect(() => {
    fetchForecast(activeLocation.lat, activeLocation.lon);
    fetchWeather(activeLocation.lat, activeLocation.lon)
  }, [activeLocation]);

  return (
    <GlobalContext.Provider
      value={{
        forecast,
        weather
      }}
    >
      <GlobalContextUpdate.Provider
        value={{
          setActiveLocation,
        }}
      >
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);