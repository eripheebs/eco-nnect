var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
require('bootstrap-webpack');
require('./css/main.css');

var RouterComponent = require('./components/RouterComponent');

ReactDOM.render(
  <RouterComponent />,
  document.getElementById('app')
);
