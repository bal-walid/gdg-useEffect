import { useEffect, useState } from "react";

const apiKey = "17691801c0805c78a2b57d524f293479";

const fetchLocation = async () => {
  const res = await fetch("http://ip-api.com/json?fields=lat,lon");
  const { lat, lon } = await res.json();
  return { lat, lon };
};

const fetchWeather = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const res = await fetch(url);
  const json = await res.json();
  const { main, description, icon } = json.weather[0];
  const iconPath = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  const temp = json.main.temp;
  const title = main;
  return { title, description, iconPath, temp };
};

const Weather = () => {
  const [coords, setCoords] = useState(null);
  const [latitudeInput, setLatitudeInput] = useState("");
  const [longitudeInput, setLongitudeInput] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchLocation().then((coords) => {
      setCoords(coords);
      setLatitudeInput(coords.lat);
      setLongitudeInput(coords.lon);
    });
  }, []);

  useEffect(() => {
    setWeather(null);
    if (coords) {
      fetchWeather(coords.lat, coords.lon).then((weatherData) =>
        setWeather(weatherData)
      );
    }
  }, [coords]);

  if (weather) {
    return (
      <div>
        <div>
          <h1>{weather.title}</h1>
          <img src={weather.iconPath} alt={weather.title} />
          <p>{weather.temp}</p>
          <p>{weather.description}</p>
        </div>
        <form>
          <input
            type="number"
            name="lat"
            value={latitudeInput}
            onChange={(e) => setLatitudeInput(e.target.value)}
          />
          <input
            type="number"
            name="lon"
            value={longitudeInput}
            onChange={(e) => setLongitudeInput(e.target.value)}
          />
          <button
            type="button"
            onClick={() =>
              setCoords({
                lat: parseFloat(latitudeInput),
                lon: parseFloat(longitudeInput),
              })
            }
            disabled={!(latitudeInput && longitudeInput)}
          >
            Change
          </button>
        </form>
      </div>
    );
  }

  return <p>Loading...</p>;
};

export default Weather;
