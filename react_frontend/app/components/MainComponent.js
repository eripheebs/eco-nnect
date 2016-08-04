var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Router = require('react-router').Router;
var RouteHandler = Router.RouteHandler;
var NavBarComponent = require('./NavBarComponent');

var MainComponent = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''};
  },
  getInitialState: function() {
    return {
      signedIn: null,
      user: this.getUser(),
      updateSession: this.checkSession()
    };
  },
  checkSession: function(){
    $.ajax({
      method: "GET",
      url: this.props.origin + "/auth/is_signed_in"
    })
    .done(function(data){
      console.log(data.signed_in);
      this.setState({ signedIn: data.signed_in });
    }.bind(this));
  },
  componentWillMount: function() {
    return this.checkSession()
  },
  getUser: function(){
    $.ajax({
      method: "GET",
      url: this.props.origin + "/auth/is_signed_in"
    })
    .done(function(data){
      console.log(data);
      return data.user;
    })
  },
  render: function(){
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child,
        {
          updateSession: this.state.updateSession,
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
