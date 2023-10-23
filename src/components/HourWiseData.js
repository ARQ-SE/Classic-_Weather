import React from "react";
import Card from "./Card";

const HourWiseData = (DayHours, uts) => {
  
console.log("uts in hwd", uts)
  //----------- To change date with 12 hour time format
  const convertTo12HourFormatTimeOnly = (dateTime) => {
    const dateObj = new Date(dateTime);
    const formattedTime = dateObj.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${formattedTime}`;
  };
  //-----------end


  return (
    <div>

      <div className="container">
        <div className="scrollable">

            {uts && DayHours &&
              DayHours.DayHours.map((data, index) => (
                <Card
                  key={index}
                  units={uts}
                  time={convertTo12HourFormatTimeOnly(data.time)}
                  imageSrc={data.condition.icon}
                  heading={data.condition.text}
                  chance_of_rain={data.chance_of_rain}
                  temp_c={data.temp_c}
                  temp_f={data.temp_f}
                  wind_speed={data.wind_kph}
                  humidity={data.humidity}
                />
              ))}

        </div>
      </div>


    </div>
  );
};

export default HourWiseData;
