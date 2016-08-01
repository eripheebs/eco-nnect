var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var hashHistory = require('react-router').hashHistory;
var MainComponent = require('../MainComponent');

var getUserSession = {
  isLoggedIn : MainComponent.signedIn
}

var ResearchComponent = React.createClass({
  getInitialState: function(){
    return getUserSession;
  },
  render: function(){
    return (
      <ResearchAPICall />
    )
  }
});

var ResearchAPICall = React.createClass({
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''};
  },
  readFromAPI: function(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error: function(error) {
        console.error(url, error['response']);
        console.log("you haven't loaded your api");
      }
    });
  },
  render: function () {
    return (
      <div>
        <ResearchNew />
        <div id="Research-feed">
          <ResearchView origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  }
});

var ResearchView = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readResearchsFromAPI();
  },
  readResearchsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/researches', function(Researchs) {
      this.setState({data: Researchs});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="Research-view">
        <ResearchList data={this.state.data} />
      </div>
    );
  }
});

var ResearchList = React.createClass({
  render: function() {
    var Researchs = this.props.data.map(function(Research) {
      return (
        <Research key={Research.id} industry={Research.industry} ngo={Research.ngo} />
      );
    });

    return (
      <ul className="Researchs-list">
        {Researchs}
      </ul>
    );
  }
});

var Research = React.createClass({
  render: function() {
    return (
      <li className="Research">
        <span className="Research-text"> {this.props.ngo}</span>
      </li>
    );
  }
});

var ResearchNew = React.createClass({
  render: function(){
    return (
      <div id="new-Research-link">
        <a onClick={() => hashHistory.push('/researches/new') }>Add Research</a>
      </div>
    )
  }
})

module.exports = ResearchComponent;
