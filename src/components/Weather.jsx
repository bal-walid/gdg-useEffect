import { useEffect, useState } from "react";

const apiKey = "17691801c0805c78a2b57d524f293479";

const fetchLocation = async () => {
  const res = await fetch("http://ip-api.com/json?fields=city");
  const { city } = await res.json();
  return city;
};

const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const res = await fetch(url);
  const json = await res.json();
  const { main, description, icon } = json.weather[0];
  const iconPath = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  const temp = json.main.temp;
  const title = main;
  return { title, description, iconPath, temp };
};

const Weather = () => {

};

export default Weather;