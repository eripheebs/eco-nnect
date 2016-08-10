var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var MainComponent = require('../MainComponent');

var getUserSession = {
  isLoggedIn : MainComponent.signedIn,
  user: MainComponent.getUser
}

var NewInvestmentComponent = React.createClass({
  getInitialState: function(){
    return getUserSession;
  },
  render: function(){
    return this.state.isLoggedIn ? <NewInvestmentForm user={this.state.user} /> : <p>You must be logged in to crate add an Investment Opportunity.</p>
  }
});

var NewInvestmentForm = React.createClass({
  render: function(){
    return this.props.user
  }

});

module.exports = NewInvestmentComponent;
