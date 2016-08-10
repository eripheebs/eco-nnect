var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var $ = require('jquery');
var Auth = require('j-toker');
Auth.configure({apiUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3001/' : ''});

var SignInComponent = React.createClass({
  _handleInputChange: function(ev) {
    var nextState = _.cloneDeep(this.state);

    nextState[ev.target.name] = ev.target.value;

    this.setState(nextState);
  },
  getInitialState: function() {
    return {
      email: '',
      password: '',
      messages: '',
      alert: ''
    };
  },
  _handleSignInClick: function(e) {
    Auth.emailSignIn({

      email: this.state.email,
      password: this.state.password

    })
    .then(function(data){
      this.setState({ messages: "You have signed in succesfully.", alert: "alert alert-success" });
      this.setTimeout(location.reload(), 4000).bind(this);
    }.bind(this), function(data){
      var responseFromApi = '';
      var errorArray = $.parseJSON(data.responseText).errors;
      for (var i = 0; i < errorArray.length; i++) {
        responseFromApi = responseFromApi.concat(errorArray[i], ", ");
      };
      responseFromApi = responseFromApi.slice(0, -2);
      this.setState({ messages: responseFromApi, alert: "alert alert-danger"});
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
        <div className={this.state.alert}>{this.state.messages}</div>
      </div>
    )
  }
});

module.exports = SignInComponent;
