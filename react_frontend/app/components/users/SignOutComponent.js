var React     = require('react');
var $         = require('jquery');
var Auth = require('j-toker');

var SignOutComponent = React.createClass({
  render:function(){
    return (
      <div> Are you sure you want to sign out?
      <a href="#" onClick={this._signOut}>Yes!</a>
      </div>
    )
  },
  _signOut: function(){
    Auth.signOut().done(function(){
      location.reload();
    });
  }
});

module.exports = SignOutComponent;
