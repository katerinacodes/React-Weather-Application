import React from "react";
import Date from "./Date";
import "./Info.css";
  import Temperature from "./Temperature";


export default function  Info(props) {
  let icon=props.data.icon;
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
      <div className="col-6">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Date date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      </div>
      <div className="col-6">  <Temperature temp={props.data.temperature}/>
      </div>
    
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
        
        <div> <img
          src={`http://openweathermap.org/img/wn/${icon
          }@2x.png`}
          alt=""
          width="140"
        /></div>
            
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}