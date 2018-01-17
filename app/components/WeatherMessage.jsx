import React from 'react';

var WeatherMessage = React.createClass({
  render: function (props) {
    return (
      <div>
        <p>It is {this.props.temp} in {this.props.location}</p>
      </div>
    );
  },
});

module.exports = WeatherMessage;
