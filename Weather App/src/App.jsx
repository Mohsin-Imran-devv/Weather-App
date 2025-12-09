import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputBar from "./Components/InputBar";
import WeatherBox from "./Components/WeatherBox";
import WeatherBoxes from "./Components/WeatherBoxes";
import { useContext } from "react";
import { WeatherContext } from "./Store/Weather-Store";

function App() {
  const { icon, city, weather, forecast, loading } = useContext(WeatherContext);

  return (
    <>
      <div className="mainContainer">
        <h1 className="app-title">🌤️ Weather App</h1>
        <InputBar />
        
        {loading ? (
          <div className="loading-container">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <WeatherBox icon={icon} city={city} weather={weather} />
            <div className="forecast">
              {forecast.map((day, index) => (
                <WeatherBoxes
                  key={index}
                  icon={day.icon}
                  temp={day.temp}
                  day={day.date}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;