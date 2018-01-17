import React from 'react';
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Pune',
      temp: 30,
    };
  },

  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23,
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
