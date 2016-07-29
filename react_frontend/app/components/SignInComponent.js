var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var $ = require('jquery');

var SignInComponent = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''};
  },
  _handleInputChange: function(ev) {
    var nextState = _.cloneDeep(this.state);

    nextState[ev.target.name] = ev.target.value;

    this.setState(nextState);
  },
  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },
  _handleSignInClick: function(e) {
    $.ajax({
      method: "POST",
      url: this.props.origin + "/api/auth/sign_in",
      data: {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      }
    })
    .done(function(data){
      location.reload();
    }.bind(this));
  },
  render:function(){
    return (
      <form>
          <input type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this._handleInputChange} />
          <input type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this._handleInputChange} />
          <input type='submit' onClick={this._handleSignInClick} defaultValue='login' />
      </form>
    )
  }
});

module.exports = SignInComponent;
