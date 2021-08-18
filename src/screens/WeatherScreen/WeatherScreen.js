import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import WeatherComponent from "./WeatherInfoComponent";
import Header from "../../components/Header";
import { Spinner } from "react-bootstrap";

export const WeatherIcons = {
  "01d": "./icons/sunny.svg",
  "01n": "./icons/night.svg",
  "02d": "./icons/day.svg",
  "02n": "./icons/cloudy-night.svg",
  "03d": "./icons/cloudy.svg",
  "03n": "./icons/cloudy.svg",
  "04d": "./icons/perfect-day.svg",
  "04n": "./icons/cloudy-night.svg",
  "09d": "./icons/rain.svg",
  "09n": "./icons/rain-night.svg",
  "10d": "./icons/rain.svg",
  "10n": "./icons/rain-night.svg",
  "11d": "./icons/storm.svg",
  "11n": "./icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 325px;
  padding: 20px 10px;
  margin: 20px auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

function WeatherScreen() {
  const [weather, updateWeather] = useState();
  const [loading, setLoading] = useState(true);
  const fetchWeather = async () => {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Dhamtari&appid=2b1ad07c4fe5e5d588febfe2a8901f3b`
    );
    updateWeather(response.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchWeather();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <>
          <Container className="p-5 my-5">
            <Spinner
              animation="border"
              role="status"
              style={{
                width: "100px",
                height: "100px",
                margin: "auto",
                display: "block",
                color: "black",
              }}
            ></Spinner>
          </Container>
        </>
      ) : (
        <>
          <Header />
          <Container>
            <AppLabel>My Dhamtari Weather</AppLabel>
            <WeatherComponent weather={weather} city="Dhamtari" />
          </Container>
        </>
      )}
    </>
  );
}

export default WeatherScreen;
