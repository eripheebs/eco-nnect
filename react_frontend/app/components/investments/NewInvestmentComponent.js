var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var MainComponent = require('../MainComponent');

var NewInvestmentComponent = React.createClass({
  getInitialState: function() {
    return {
      signedIn: this.props.signedIn
    };
  },
  render: function(){
    return this.state.signedIn ? <NewInvestmentForm user={this.state.user} /> : <p>You must be logged in to crate add an Investment Opportunity.</p>
  }
});

var NewInvestmentForm = React.createClass({
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
