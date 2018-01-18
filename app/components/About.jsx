import React from 'react';

let About = (props) => {
    return (
      <div>
        <h3 className="text-center page-title">About</h3>
        <p>This is weather application built using React.</p>
        <p>Here are the tools I have used:</p>
        <ul>
          <li><a href="https://facebook.github.io/react">React </a>
           This was the JavaScript framework used.
        </li>
        <li><a href="https://openweathermap.org">OpenWeathermap </a>
          I used Open Weather Map to search for weather data by city name.
        </li>
        </ul>
      </div>
    );
  };

module.exports = About;
