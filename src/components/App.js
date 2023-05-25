
import React from "react";
import './../styles/App.css';

const App = () => {
  const weather = {
    temperature: 25, 
    conditions: "Sunny"
  }
  return (
    <div>
        <p style={weather.temperature> 20?{backgroundColor:'red'}:{backgroundColor:'blue'}}>temperature {weather.temperature}</p>
        <p >condition {weather.conditions}</p>

    </div>
  )
}

export default App
