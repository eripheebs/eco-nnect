var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var MainComponent = require('../MainComponent');
var $ = require('jquery');
var Auth = require('j-toker');

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    Auth.appendAuthHeaders(xhr, settings);
  }
});

var NewInvestmentComponent = React.createClass({
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
    return this.state.signedIn ? <NewInvestmentForm user={this.state.user} /> : <p>You must be logged in to crate add an Investment Opportunity.</p>
  }
});

var NewInvestmentForm = React.createClass({
  submitInvestment: function(url, successFunction) {
    $.ajax({
      type: "POST",
      url: url,
      data: {
        'investment': {
          'title': this.state.title,
          'industry': this.state.industry,
          'ngo': this.state.ngo,
          'description': this.state.description
        }
      },
      success: successFunction,
      dataType: 'json'
    });
  },
  _handleInputChange: function(ev) {
    var nextState = _.cloneDeep(this.state);

    nextState[ev.target.name] = ev.target.value;

    this.setState(nextState);
  },
  getInitialState: function() {
    return {
      title: '',
      industry: '',
      ngo: '',
      description: '',
      messages: ''
    };
  },
  _handleNewInvestmentClick: function(e) {
    this.submitInvestment('http://localhost:3001/investments', function(){
      this.setState({messages: 'Your investment has been submitted.'});
    }.bind(this));
  },
  render: function(){
    return <div><h2>New Investment</h2>
      <input type='text'
        name='title'
        placeholder='title'
        value={this.state.title}
        onChange={this._handleInputChange} />

      <input type='text'
        name='industry'
        placeholder='industry'
        value={this.state.industry}
        onChange={this._handleInputChange} />

      <input type='text'
        name='ngo'
        placeholder='ngo'
        value={this.state.ngo}
        onChange={this._handleInputChange} />

      <input type='text'
        name='description'
        placeholder='description'
        value={this.state.description}
        onChange={this._handleInputChange} />
      <button className='btn btn-primary' onClick={this._handleNewInvestmentClick} > Submit </button>

      <div id="success-error-messages">{this.state.messages}</div>
    </div>
  }
});

module.exports = NewInvestmentComponent;
