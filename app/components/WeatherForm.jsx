import React from 'react';

let WeatherForm = React.createClass({
  onFormSubmit(e) {
    e.preventDefault();

    let location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Enter city name" />
          <button className="hollow button expanded">Get Weather</button>
        </form>
      </div>
    );
  },
});

module.exports = WeatherForm;
