import React from 'react';

let WeatherMessage = (props) => {
    return (
      <div>
        <p>It is {props.temp} in {props.location}</p>
      </div>
    );
  };

module.exports = WeatherMessage;
