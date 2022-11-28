
import './App.css';
import React from "react";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      
            <Weather defaultCity="New York"/>
            
            <footer>
          This project was coded by{" "}
          
           Katerina Tsalidi
          {" "}
          and is{" "}
          <a
            href="https://github.com/katerinacodes/react-weather-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/katerinacodes/react-weather-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>

    </div>
  );
}

export default App;
