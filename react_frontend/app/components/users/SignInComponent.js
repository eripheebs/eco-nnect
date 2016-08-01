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
      password: '',
      messages: ''
    };
  },
  _handleSignInClick: function(e) {
    $.ajax({
      method: "POST",
      url: this.props.origin + "/api/auth/sign_in",
      data: {

        email: this.state.email,
        password: this.state.password

      }
    })
    .then(function(data){
      this.setState({ messages: "You have signed in succesfully." });
    }.bind(this), function(data){
      var responseFromApi = '';
      var errorArray = $.parseJSON(data.responseText).errors;
      for (var i = 0; i < errorArray.length; i++) {
        responseFromApi = responseFromApi.concat(errorArray[i], ", ");
      };
      responseFromApi = responseFromApi.slice(0, -2);
      this.setState({ messages: responseFromApi});
    }.bind(this))
  },
  render:function(){
    return (
      <div>
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
      <div id="success-error-messages">{this.state.messages}</div>
      </div>
    )
  }
});

module.exports = SignInComponent;
