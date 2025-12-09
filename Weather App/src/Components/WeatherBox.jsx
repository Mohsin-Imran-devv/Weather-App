import { useContext } from "react";
import { IoMdSunny } from "react-icons/io";
import { WeatherContext } from "../Store/Weather-Store";

const WeatherBox = () => {

  const {city, weather, icon} = useContext(WeatherContext);
  return (
    <>
      <div className="box">
        <img src={`${icon}`} alt="" />
        <div className="elements">
          <h5>Today</h5>
          <h3 style={{fontWeight:"700"}}>{city}</h3>
          <h4 style={{fontWeight:"300"}}>Temperature: {weather}°C</h4>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
