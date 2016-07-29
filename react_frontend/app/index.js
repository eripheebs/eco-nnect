var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var RouterComponent = require('./components/RouterComponent');
var NavBarComponent = require('./components/NavBarComponent');

ReactDOM.render(
  <NavBarComponent />,
  document.getElementById('nav-bar')
);

ReactDOM.render(
  <RouterComponent />,
  document.getElementById('content')
);
