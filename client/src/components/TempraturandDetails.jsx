import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
const TempraturandDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src="" className="w-20" alt="" />
        <p className="text-5xl"> 34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity :<span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind :<span className="font-medium ml-1">32 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="text-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="text-light">
          Set: <span className="font-medium ml-1">06:45 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="text-light">
          High: <span className="font-medium ml-1">45°</span>
        </p>
        <p className="font-light">|</p>
        
        <UilSun />
        <p className="text-light">
          Low: <span className="font-medium ml-1">10°</span>
        </p>
      </div>
    </div>
  );
};

export default TempraturandDetails;
