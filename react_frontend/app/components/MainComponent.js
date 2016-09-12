var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Router = require('react-router').Router;
var RouteHandler = Router.RouteHandler;
var NavBarComponent = require('./NavBarComponent');
var Auth = require('j-toker');

var MainComponent = React.createClass({
  checkSession: function(){
    Auth.validateToken()
      .then(function(user) {
        console.log("token validated")
        this.setState({
          userEmail: user.email,
          signedIn: true
        })
      }.bind(this))
      .fail(function() {
        console.log("no user logged in")
      });
  },
  getInitialState: function() {
    return {
      signedIn: null,
      userEmail: null,
      user: Auth.user,
      updateSession: this.checkSession()
    };
  },
  componentWillMount: function() {
    this.checkSession()
  },
  render: function(){
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child,
        {
          user: Auth.user,
          signedIn: !!(Auth.user)
        }
      )
    }.bind(this))
    return (
      <div><NavBarComponent isLoggedIn={this.state.signedIn} />
        <div id="content">
          {children}
        </div>
      </div>
    )
  }
});

module.exports = MainComponent;
