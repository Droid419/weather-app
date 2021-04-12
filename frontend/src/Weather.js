import React,{useState} from 'react';
import axios from 'axios';


function Weather() {
    const [weather,setWeather]=useState("Not yet gotten");

    const handleLogIn=()=>{
        axios.get('http://localhost:7000/weather/getWeatherghana')
        .then(response=>{
            setWeather(
                response.data.temperature
            )
        })
    }
    return (
        <div>
            <button onClick={handleLogIn}>Get Weather In Ghana</button>
            <h1>The weather in Ghana is : {weather} </h1>
        </div>
    )
}

export default Weather
