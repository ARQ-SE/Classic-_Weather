import React, { useState, useContext } from "react";
import HourWiseData from "./HourWiseData";
import './DayWiseData.css'

const DayWiseData = ({ DayNo, units }) => {
  // const units = React.useContext(MyContext);
  // const [unts, setUnts] = useState('C');
  //----------- To display hourly weather
  const [needHourly, setNeedHourly] = useState("No");


  const showHourlyData = () => {
    setNeedHourly("Yes");
    // setUnts(units) 
    // console.log("unitsin dwd", units)
  };
  const dontShowHourlyData = () => {
    setNeedHourly("No");
  };
  //-------------end


  //----------- To change date with 12 hour time format
  const convertTo12HourFormat = (dateTime) => {
    const dateObj = new Date(dateTime);

    const formattedDate = dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return `${formattedDate}`;
  };
  //-----------end


  return (
      <div>


        {DayNo ? (
          <div>

          <div className="overallMainItems">
            <h3>Overall on: {convertTo12HourFormat(DayNo.date)}</h3>
            <img src={DayNo.day.condition.icon} alt="img icon" />
            <p id="statuscss">
              <b>{DayNo.day.condition.text}</b>
            </p>
            </div>
            <div className="overallSecondaryItems">
              <div>
            <p>
              Chance of rain: <b>{DayNo.day.daily_chance_of_rain}%</b>
            </p>
            <p>
              Max Wind Speed: <b>{DayNo.day.maxwind_kph.toFixed()} KPH</b>
            </p>
            <p>
              Average humidity: <b>{DayNo.day.avghumidity}%</b>
            </p>
            </div>

            <div>
            {units === "C" ? (
              <div>
                <p>
                  Max Temperature: <b>{DayNo.day.maxtemp_c.toFixed()} °C</b>
                </p>
                <p>
                  Min Temperature: <b>{DayNo.day.mintemp_c.toFixed()} °C</b>
                </p>
                <p>
                  Average temperature: <b>{DayNo.day.avgtemp_c.toFixed()} °C</b>
                </p>
              </div>
            ) : null}
            
            {units === "F" ? (
              <div> 
                <p>
                  Max Temperature: <b>{DayNo.day.maxtemp_f.toFixed()} °F</b>
                </p>
                <p>
                  Min Temperature: <b>{DayNo.day.mintemp_f.toFixed()} °F</b>
                </p>
                <p>
                  Average temperature: <b>{DayNo.day.avgtemp_f.toFixed()} °F</b>
                </p>
              </div>
              
            ) : null}
            </div>

            <div>
            <p>
              Sunrise: <b>{DayNo.astro.sunrise}</b>
            </p>
            <p>
              Sunset: <b>{DayNo.astro.sunset}</b>
            </p>
            </div> 
          
            </div>
            {needHourly === "No" ? (
              <button onClick={showHourlyData}>View hourly Weather</button>
            ) : null}

            {needHourly === "Yes" ? (
              <div>

                <HourWiseData
                  key={DayNo.hour.index}
                  DayHours={DayNo.hour}
                  units={units}
                />

                <button onClick={dontShowHourlyData}>
                  Hide hourly Weather
                </button>

              </div>
            ) : null}


          </div>
        ) : null}


      </div>
  );
};

export default DayWiseData;
