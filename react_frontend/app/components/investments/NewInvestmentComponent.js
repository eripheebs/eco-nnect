var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var Auth = require('j-toker');

var NewInvestmentComponent = React.createClass({
  getInitialState:function(){
    return {
      isLoggedIn: false
    }
  },
  componentDidMount:function(){
    Auth.validateToken().then(function(){
      this.setState({ email : Auth.user.email,
        isLoggedIn: Auth.user.signedIn
      });
    }.bind(this));
  },
  render: function(){
    return this.state.isLoggedIn ? <NewInvestmentForm email={this.state.email} /> : (<p>You must be logged in to create add an Investment Opportunity.</p>)
  }
});

var NewInvestmentForm = React.createClass({
  render: function(){
    return <div>hi {this.props.email}</div>
  }
});

module.exports = NewInvestmentComponent;
