var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');
var $ = require('jquery');
var Auth = require('j-toker');

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
      location.reload();
    }.bind(this))
    .fail(function(resp){
      this.setState({ messages: resp.reason, alert: "alert alert-danger"});
    }.bind(this))
  },
  render:function(){
    return (
      <div>

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
            <button className='btn btn-primary' onClick={this._handleSignInClick} > Login </button>

        <div className={this.state.alert}>{this.state.messages}</div>
      </div>
    )
  }
});

module.exports = SignInComponent;
