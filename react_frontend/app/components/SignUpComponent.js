var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var $ = require('jquery');

var SignUpComponent = React.createClass({
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
      password: '',
      password_confirmation: '',
      name: '',
      responseFromApi: ''
    };
  },
  _handleRegistrationClick: function(e) {
    $.ajax({
      method: "POST",
      url: this.props.origin + "/api/auth",
      data: {

          email: this.state.email,
          uid: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          name: this.state.name,
          provider: "email"

      }
    }).then(function(data){
      console.log("hi!");
    }, function(data){
      console.log($.parseJSON(data.responseText).errors.full_messages);
      var errorArray = $.parseJSON(data.responseText).errors.full_messages;
      for (var i = 0; i < errorArray.length; i++) {
        console.log(this.state);
        var responseFromApi = errorArray[i];
      };
    })
    // .done(function(data){
    //   location.reload();
    // }.bind(this));
  },
  render:function(){
    return (
      <div>
      <form>
        <input type='text'
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this._handleInputChange} />

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

        <input type='password'
          name='password_confirmation'
          placeholder='re-type password'
          value={this.state.password_confirmation}
          onChange={this._handleInputChange} />
      <input onClick={this._handleRegistrationClick} defaultValue="sign up"/>
      </form>
      <div id="success-error">{this.state.responseFromApi}</div>
      </div>
    )
  }
});


module.exports = SignUpComponent;
