import React from 'react';
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Pune',
      temp: 30,
    };
  },

  handleSearch: function (location) {
    var that = this;
    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
      });
    },

    function (err) {
      alert(err);
    });
  },

  render: function () {
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage location={this.state.location} temp={this.state.temp} />
      </div>
    );
  },
});

module.exports = Weather;
