var React        = require('react');
var ReactDOM = require('react-dom');
var $            = require('jquery');
var NavBarComponent = require('./NavBarComponent');

var MainComponent = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''};
  },
  componentWillMount: function() {
    $.ajax({
      method: "GET",
      url: this.props.origin + "/auth/is_signed_in.json"
    })
    .done(function(data){
      this.setState({ signedIn: data.signed_in });
    }.bind(this));
  },
  getInitialState: function() {
    return { signedIn: null };
  },
  getUser: function(){
    $.ajax({
      method: "GET",
      url: this.props.origin + "/auth/is_signed_in.json"
    })
    .done(function(data){
      console.log(data);
      return data;
    })
  },
  render: function(){
    return (
      <NavBarComponent isLoggedIn={this.state.signed_in} user={this.getUser} />
    )
  }
});

module.exports = MainComponent;
