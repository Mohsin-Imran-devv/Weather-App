const WeatherBoxes = ({icon, temp, day}) => {
  return <>
  <div className="smallBox">
        <div className="elements">
          <h5 style={{fontWeight:"700", fontSize:"1.7rem"}}>{day}</h5>
          <img src={`${icon}`} alt="" />
          <h4 style={{fontWeight:"300"}}>{temp}°C</h4>
        </div>
      </div>
  </>;
};

export default WeatherBoxes;
