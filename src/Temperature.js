import React from "react";
import "./Temperature.css";
export default function Temperature(props){
    return(
        <div>
            <span class="temperature">
                {Math.round(props.temp)}
            </span>
            <span class="celcius">
            °C
            </span>
        </div>
    );
}