var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var HomeComponent = require('./HomeComponent');
var ResearchComponent = require('./ResearchComponent');
var InvestmentComponent = require('./InvestmentComponent');
var SignInComponent = require('./SignInComponent');
var SignUpComponent = require('./SignUpComponent');
var SignOutComponent = require('./SignOutComponent');

var RouterComponent = React.createClass({
  render: function(){
    return <Router history={hashHistory}>
        <Route name='home' path='/' component={HomeComponent} />
        <Route name='researches' path='/researches' component={ResearchComponent} />
        <Route name='investments' path='/investments' component={InvestmentComponent} />
        <Route name='log_in' path='/log_in' component={SignInComponent} />
        <Route name='sign_up' path='/sign_up' component={SignUpComponent} />
        <Route name='sign_up' path='/sign_out' component={SignOutComponent} />
      </Router>
  }
});

module.exports = RouterComponent;
