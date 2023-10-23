import React from "react";
import "./Card.css"; // Create a separate CSS file for styling

const Card = ({
  time,
  imageSrc,
  heading,
  chance_of_rain,
  temp_c,
  temp_f,
  wind_speed,
  humidity,
}, units) => {
  return (
    <div className="card">

      <h3 className="card-title">{time}</h3>
      <img className="card-image" src={imageSrc} alt="Card" />
      <h2 className="card-title">{heading}</h2>
      <div className="card-content">
        
        <p className="card-description">
          Chances of Rain: <b>{chance_of_rain}%</b>
        </p>
        {units === "C" ? (
          <p className="card-description">
            Temperature: <b>{temp_c.toFixed()} °C</b>
          </p>
        ) : (
          <p className="card-description">
            Temperature: <b>{temp_f.toFixed()} °F</b>
          </p>
        )}
        <p className="card-description">
          Wind Speed: <b>{wind_speed.toFixed()} Kph</b>
        </p>
        <p className="card-description">
          Humidity: <b>{humidity}%</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
