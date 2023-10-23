import Navbar from "../components/Navbar";
import fetchWeather from "../FetchWeather";
import getFromattedData from "../GetFormattedData";
import DayWiseData from "../components/DayWiseData";
import "./Home.css";
import React, { useState } from "react";


const Home = () => {
  const [formattedData, setformattedData] = useState();
  const [units, setUnits] = useState("C");
  const [count, setCount] = useState(0);

  //-----------  To get weather via fetchweather.js file
  const fetchData = async () => {
    const data = await fetchWeather(inputValue);
    // console.log("This data is returning in home from fetching data file", data);
    const fdata = await getFromattedData(data);
    // console.log("this is the formatted data returning in home", fdata);
    setformattedData(fdata);
  };
  //-----------end

  //----------- To get input
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };
  //-----------end

  // const settingCountPlus () {
  //   console.log(count);
  //   if (count>=0 && count<2) {
  //     setCount(count+1);
  //   } else {
  //     window.alert("Sorry! data available for 3 days only.");
  //   }
  // };
function settingCountPlus() {
  if (count>=0 && count<2) {
    setCount(count+1);
    console.log(count);
  } else {
    window.alert("Sorry! data available for 3 days only.");
  }
}
function settingCountMinus() {
  if (count>=0 && count<2) {
    setCount(count-1);
    console.log(count);
  } else {
    window.alert("Sorry! data available for 3 days only.");
  }
}
  // const settingCountMinus = () => {
  //   console.log(count);
  //   if (count>=0 && count<2) {
  //     setCount(count-1);
  //   } else {
  //     window.alert("Sorry! data available for 3 days only.");
  //   }
  // };


  //----------- To change date with 12 hour time format
  const convertTo12HourFormat = (dateTime) => {
    const dateObj = new Date(dateTime);

    const formattedDate = dateObj.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = dateObj.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${formattedDate} , ${formattedTime}`;
  };
  //-----------end

  //----------- To change temperature units
  const celciusClick = () => {
    setUnits("C");
    document.getElementById("cbtn").style.fontWeight = "bold";
    document.getElementById("fbtn").style.fontWeight = "400";
    document.getElementById("cbtn").style.backgroundColor =
      "rgb(245, 245,245, 0.3)";
    document.getElementById("fbtn").style.backgroundColor =
      "rgb(245, 245,245, 0.1)";
  };

  const fereinheitClick = () => {
    setUnits("F");
    document.getElementById("fbtn").style.fontWeight = "bold";
    document.getElementById("cbtn").style.fontWeight = "400";
    document.getElementById("fbtn").style.backgroundColor =
      "rgb(245, 245,245, 0.3)";
    document.getElementById("cbtn").style.backgroundColor =
      "rgb(245, 245,245, 0.1)";
  };
  //-----------end

  return (
    <div>
      <div className="mainsection">
        <Navbar/>
        <div
        // style={{ backgroundColor: "rgb(0, 0, 0, 0.3)" }}
        >
          <div className="inputsArea">
            <input
              type="text"
              id="myinput"
              onChange={handleInputChange}
              placeholder="City name..."
            />
            <button className="mainBtn" onClick={handleButtonClick}>
              Submit
            </button>
            {formattedData ? (
              <button className="mainBtn" id="cbtn" onClick={celciusClick}>
                °C
              </button>
            ) : (
              <button className="mainBtn" onClick={celciusClick}>
                °C
              </button>
            )}

            <button className="mainBtn" id="fbtn" onClick={fereinheitClick}>
              °F
            </button>
          </div>

          {!formattedData ? (
            <div>
              <h1>Welcome to Classic Weather</h1>
              <p>
                You can freely search about the weather in your respective area.
              </p>
            </div>
          ) : null}

          {formattedData ? (
            <>
              <div className="currentDetails">
                <p id="locap">
                  {formattedData.name}, {formattedData.country}
                </p>
                <p id="timep">
                  {convertTo12HourFormat(formattedData.localtime)}
                </p>
                <div className="textnicon">
                  {units === "C" ? (
                    <span className="tempp">
                      <>{formattedData.temp_c.toFixed()}°</>
                    </span>
                  ) : (
                    <span className="tempp">
                      <>{formattedData.temp_f.toFixed()}°</>
                    </span>
                  )}
                  <img src={formattedData.icon} alt="icon" />
                </div>
                <p id="statp">
                  <>{formattedData.text}</>
                </p>

                <div className="subdetails">
                  {units === "C" ? (
                    <p className="feelp ">
                      Feels Like:{" "}
                      <b>{formattedData.feelslike_c.toFixed()} °C</b>
                    </p>
                  ) : (
                    <p className="feelp ">
                      Feels Like:{" "}
                      <b>{formattedData.feelslike_f.toFixed()} °F</b>
                    </p>
                  )}
                  <p id="cloup">
                    Cloud: <b>{formattedData.cloud}%</b>
                  </p>
                  <p id="humip">
                    Humidity: <b>{formattedData.humidity}%</b>
                  </p>
                  <p id="precp">
                    Precip_in: <b>{formattedData.precip_in}</b>
                  </p>
                  <p id="windp">
                    Wind: <b>{formattedData.wind_kph.toFixed()} Kph</b>
                  </p>
                </div>
              </div>
              <DayWiseData DayNo={formattedData.forecastday[count]} units={units} />
           
                
            </>
          ) : null}
        </div>
        {formattedData? (<div><button onClick={settingCountMinus()}>
                  Previous Day Weather
                </button>
              <button onClick={settingCountPlus()}>
                  Next Day Weather
                </button></div>)
                : null }
      </div>

      {/* //------------- Day wise renders section */}
      {/* {formattedData &&
        formattedData.forecastday.map((data, index) => (
          <div style={{ backgroundColor: "rgb(0,0,0,0.3)" }}>
            <MyContext.Provider value={units}>
            <DayWiseData key={index} DayNo={data} units={units}/> 
            </MyContext.Provider>
          </div>
        ))} */}
      {/* //............end */}
    </div>
  );
};

export default Home;
