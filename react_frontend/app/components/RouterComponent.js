var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var HomeComponent = require('./HomeComponent');
var MainComponent = require('./MainComponent');
var ResearchComponent = require('./research/ResearchComponent');
var NewResearchComponent = require('./research/NewResearchComponent');
var InvestmentComponent = require('./investments/InvestmentComponent');
var NewInvestmentComponent = require('./investments/NewInvestmentComponent');
var SignInComponent = require('./users/SignInComponent');
var SignUpComponent = require('./users/SignUpComponent');
var SignOutComponent = require('./users/SignOutComponent');

var RouterComponent = React.createClass({
  render: function(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={MainComponent}>
          <IndexRoute component={HomeComponent} />
          <Route name='researches' path='researches' component={ResearchComponent} />
          <Route name='new_research' path='researches/new' component={NewResearchComponent} />
          <Route name='investments' path='investments' component={InvestmentComponent} />
          <Route name='new_investment' path='investments/new' component={NewInvestmentComponent} />
          <Route name='log_in' path='log_in' component={SignInComponent} />
          <Route name='sign_up' path='sign_up' component={SignUpComponent} />
          <Route name='sign_up' path='sign_out' component={SignOutComponent} />
        </Route>
      </Router>
    )
  }
});

module.exports = RouterComponent;
