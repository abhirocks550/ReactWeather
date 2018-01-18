import React from 'react';

let WeatherMessage = (props) => {
    return (
      <div>
        <h3 className="text-center">
          It is {props.temp} &nbsp;
          <img src="https://n6-img-fp.akamaized.net/free-icon/zero-degrees_318-85217.jpg"
            height="30px" width="30px">
          </img> in {props.location}
        </h3>
      </div>
    );
  };

module.exports = WeatherMessage;
