import React from "react";
import "./Forecast.css"

export default function ForecastDay(props) {
    let icon=props.data.weather[0].icon;
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[day];
  }
  
  return (
    <div>
      <div class="ForecastDay">{day()}</div>

      <div>
      <img
          src={`http://openweathermap.org/img/wn/${icon
          }@2x.png`}
          alt=""
          width="80"
        /> </div>

      <div class="WeatherForecast-temperatures">
        <span class="WeatherForecast-temperature-max">
          {maxTemperature()} ｜
        </span>
        <span class="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}