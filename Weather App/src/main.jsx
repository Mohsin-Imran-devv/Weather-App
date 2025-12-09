import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { WeatherProvider } from "./Store/Weather-Store.jsx";

createRoot(document.getElementById("root")).render(
  <WeatherProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </WeatherProvider>
);
