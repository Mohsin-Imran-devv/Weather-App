import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { WeatherContext } from "../Store/Weather-Store";

const InputBar = () => {
  const { cityElement, handleSearch, handleKeyPress } = useContext(WeatherContext);
  
  return (
    <>
      <div className="input-group mb-3 inputContainer">
        <input
          type="search"
          className="form-control inputBar"
          placeholder="Enter a City..."
          aria-label="Search city"
          aria-describedby="button-addon2"
          ref={cityElement}
          onKeyPress={handleKeyPress}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default InputBar;