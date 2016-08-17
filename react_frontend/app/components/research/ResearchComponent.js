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
        <div id="research-feed">
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
    this.props.readFromAPI(this.props.origin + '/researches', function(researches) {
      this.setState({data: researches});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="research-view">
        <ResearchList data={this.state.data} />
      </div>
    );
  }
});

var ResearchList = React.createClass({
  render: function() {
    var researches = this.props.data.map(function(research) {
      return (
        <Research key={research.id} topic={research.topic} description={research.description} />
      );
    });

    return (
      <ul className="Researchs-list">
        {researches}
      </ul>
    );
  }
});

var Research = React.createClass({
  getInitialState: function(){
    return {
      allResearchView: true
    }
  },
  cutDescriptionSize: function(description){
    if (!!description) return description.slice(0, 296);
  },
  fitsInBox: function(description){
    return (!description || description.length < 296) ? true : false
  },
  switchView: function(title, industry, description){
    this.setState({
      allInvestmentView: false,
      topic: this.props.topic,
      files: this.props.files,
      description: this.props.description
    })
  },
  render: function() {
    return this.state.allResearchView ? (
        <li className="investment" onClick={this.switchView}>
          <div className="investment-display">
            <span className="investment-title">{this.props.topic}</span><br />
            <span className="investment-description">{this.cutDescriptionSize(this.props.description)}<span className={"hide-" + this.fitsInBox(this.props.description)}>... <a onClick={this.switchView}>Full details</a></span> </span>
          </div>
        </li>
    ) : (
      <div className="larger-investment">
        <span className="investment-title">{this.props.topic}</span><br />
        <span className="investment-description">{this.props.description}</span>
      </div>
    )
  }
});

var ResearchNew = React.createClass({
  render: function(){
    return (
      <div id="new-research-link">
        <a onClick={() => hashHistory.push('/researches/new') }>Add Research</a>
      </div>
    )
  }
})

module.exports = ResearchComponent;
