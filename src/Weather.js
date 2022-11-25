import React, {useState}from "react";
import axios from "axios";
import "./weather.css";
import {WiDayCloudyGusts } from "react-icons/wi";
export default function Weather(){
    const[city,setCity]=useState("")
    const[weatherData,setWeatherData]=useState("")
    function search() {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }
      function handleResponse(response){
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity: response.data.main.humidity,
            description:response.data.weather[0].icon, 
            wind:response.data.wind.speed,
            city:response.data.name,

        })
      }
function handleSubmit(event){
    event.preventDefault();
    search();
}
function handleCity(event){
setCity(event.target.value);
};
    return(
        <div class="Weather-app">
            <form on Submit={handleSubmit}>
            <input type="text"  placeholder="Enter a City" on change={handleCity}></input>
                <button type="submit" >Search</button>
            </form>
            <div class="info">
            <h1>New York, 6 °C</h1>
            <ul className="day">
            <li >
                Wednesday 07:00
            </li>
            <li>
                Mostly Cloudy
            </li>
            </ul>
            <div className="row">
                <div className="col-6">
            < WiDayCloudyGusts  style={{color: 'blueviolet', fontSize: '100px'}}/>
           
                </div>
          
                <div className="col-6">
                <ul>
                   <li>Humidity: 20%</li>
                    <li>Wind: 15km/h</li>
                    <li>Sunrise: 07:00 am</li>
                    <li>Sunset: 20:03 pm</li>
                    
                    </ul>
                </div>

            </div>
            </div>
        </div>
    );
}