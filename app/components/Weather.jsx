import React from 'react';
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');

let Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    };
  },

  handleSearch: function (location) {
    let that = this;
    that.setState({
      isLoading: true,
    });
    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    },

    function (err) {
      that.setState({
        isLoading: false,
      });
      alert(err);
    });
  },

  render: function () {
    let { isLoading, location, temp } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather ...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  },
});

module.exports = Weather;
