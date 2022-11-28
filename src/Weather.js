import React, {useState}from "react";
import axios from "axios";
import "./weather.css";
import  Info from "./Info";
export default function Weather(props){
    const[city,setCity]=useState(props.defaultCity)
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
            icon:response.data.weather[0].icon
            ,
            description:response.data.weather[0].description, 
            wind:response.data.wind.speed,
            city:response.data.name,
            date: new Date(response.data.dt * 1000),
        })          
      }
function handleSubmit(event){
    event.preventDefault();
    search();
}
function handleCity(event){
setCity(event.target.value);
};
  if (weatherData.ready){  return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="Enter a City" onChange={handleCity}></input>
                <button type="submit" >Search</button>
            </form>
            <Info data={weatherData} />
        </div>
    );}
    else{
        search();
        return "Loading data...";
    }
}
