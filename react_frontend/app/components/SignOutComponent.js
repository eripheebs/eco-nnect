var React     = require('react');
var $         = require('jquery');

var SignOutComponent = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''};
  },
  render:function(){
    return (
      <div> Are you sure you want to sign out?
      <a href="#" onClick={this._signOut}>Yes!</a>
      </div>
    )
  },
  _signOut: function(){
    $.ajax({
      method: "DELETE",
      url: this.props.origin + "/api/auth/sign_out",
      data: {
        
      }
    }).done(function(){
      location.reload();
    });
  }
});

module.exports = SignOutComponent;
