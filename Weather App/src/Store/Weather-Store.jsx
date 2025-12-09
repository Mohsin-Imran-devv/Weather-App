import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Lahore");
  const [weather, setWeather] = useState(0);
  const [icon, setIcon] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b710d5538b2f4205a3453805253107&q=${city}&days=5`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert("City not found! Showing default city.");
          setCity("Lahore");
          setWeather(30.1);
          setIcon("https://cdn.weatherapi.com/weather/64x64/day/389.png");
          setForecast([]);
        } else {
          setWeather(data.current.temp_c);
          setIcon("https:" + data.current.condition.icon);
          const dailyData = data.forecast.forecastday.slice(1, 4).map((day) => {
            return {
              date: new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              }),
              icon: "https:" + day.day.condition.icon,
              temp: day.day.avgtemp_c,
            };
          });
          setForecast(dailyData);
        }
        setLoading(false);
      })
      .catch(() => {
        alert("Network error! Check your connection.");
        setLoading(false);
      });
  }, [city]);

  let cityElement = useRef();
  
  function handleSearch() {
    let searchCity = cityElement.current.value.trim();
    if (searchCity) {
      setCity(searchCity);
      cityElement.current.value = "";
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        setWeather,
        icon,
        setIcon,
        forecast,
        setForecast,
        cityElement,
        handleSearch,
        handleKeyPress,
        loading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};