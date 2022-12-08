import React from "react";
import "./Summary.css";
const Summary = () => 
  <div className="container1">
    <h1>Food Delivery App </h1>
    <div className="SummaryContainer">
      <p>
        Weather app with the help of React Redux Saga. There are 4 main
        components{" "}
      </p>
      <ul>
        <li>Navbar</li>
        <li>Weather</li>
        <li>Show Weather</li>
        <li>Summary</li>
      </ul>
      <p>
        In Navbar all the Pages link are provided. In Summary Component, summary
        of the project is written. And in Weather App Component, There is an
        Input search functionality in which city name will be entered and by
        clicking on Search button , city data will be displayed on show Weather
        component. In show Weather component. Weather data is displayed by
        getting state from using useSelector hook. All the styling part is
        written in their respective css file. In App.js all the components will
        be rendered using react router dom component. In show Weather component
        all the items will be shown using html.
      </p>
      <br></br>
    </div>
  </div>

export default Summary;
