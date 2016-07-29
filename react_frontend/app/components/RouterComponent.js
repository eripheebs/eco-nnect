var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var HomeComponent = require('./HomeComponent');
var ResearchComponent = require('./ResearchComponent');
var InvestmentComponent = require('./InvestmentComponent');

var RouterComponent = React.createClass({
  render: function(){
    return <Router history={hashHistory}>
        <Route path='/' component={HomeComponent} />
        <Route path='/research' component={ResearchComponent} />
        <Route path='/investment' component={InvestmentComponent} />
      </Router>
  }
});

module.exports = RouterComponent;
