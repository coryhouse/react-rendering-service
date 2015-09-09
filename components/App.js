'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    return <h1>Hello {this.props.firstName} {this.props.lastName}!</h1>;
  }
});

module.exports = App;
