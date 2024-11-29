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
  const [city, setCity] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchLocation().then((city) => {
      setCity(city);
      setCityInput(city);
    });
  }, []);

  useEffect(() => {
    setWeather(null);
    if (city) {
      fetchWeather(city).then((weatherData) => setWeather(weatherData));
    }
  }, [city]);

  if (weather) {
    return (
      <div className="weather">
        <input
          type="text"
          name="city"
          value={cityInput}
          autoComplete="off"
          onChange={(e) => setCityInput(e.target.value)}
        />
        <h1>{weather.title}</h1>
        <h2>{weather.description}</h2>
        <img src={weather.iconPath} alt={weather.title} />
        <p>{weather.temp} °C</p>

        <button type="button" onClick={() => setCity(cityInput)}>
          Change
        </button>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default Weather;