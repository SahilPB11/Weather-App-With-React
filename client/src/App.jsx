import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./inputs";
import TimeAndLocation from "./TimeAndLocation";
import TempraturandDetails from "./components/TempraturandDetails";
import Forcast from "./components/Forcast";
import getFormattedWeatherdata from "./Services/weatherservice";

function App() {
  const fetchWeather = async () => {
    try {
      const data = await getFormattedWeatherdata({ q: "London" });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchWeather();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32  bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempraturandDetails />

      <Forcast title="hourly forcast" />
      <Forcast title="daily forcast" />
    </div>
  );
}

export default App;
