import React from 'react';
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const OpenWeatherMap = require('OpenWeatherMap');
const ErrorModal = require('ErrorModal');

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
      errorMessage: undefined
    });

    OpenWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    },

    function (err) {
      debugger;
      that.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },

  render: function () {
    let { isLoading, location, temp, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather ...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  },
});

module.exports = Weather;
