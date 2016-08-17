var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var hashHistory = require('react-router').hashHistory;
var MainComponent = require('../MainComponent');

var getUserSession = {
  isLoggedIn : MainComponent.signedIn
}

var InvestmentComponent = React.createClass({
  getInitialState: function(){
    return getUserSession;
  },
  render: function(){
    return <InvestmentAPICall />
  }
});

var InvestmentAPICall = React.createClass({
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
      <div id="investment-page">
        <InvestmentNew />
        <div id="investment-feed">
          <InvestmentView origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  }
});

var InvestmentView = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readInvestmentsFromAPI();
  },
  readInvestmentsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/investments', function(investments) {
      this.setState({data: investments});
    }.bind(this));
  },
  render: function() {
    return (
      <div className="investment-view">
        <InvestmentList data={this.state.data} />
      </div>
    );
  }
});

var InvestmentList = React.createClass({
  render: function() {
    var investments = this.props.data.map(function(investment) {
      return (
        <Investment key={investment.id} industry={investment.industry} ngo={investment.ngo} description={investment.description} title={investment.title} />
      );
    });

    return (
      <ul className="investments-list">
        {investments}
      </ul>
    );
  }
});

var Investment = React.createClass({
  getInitialState: function(){
    return {
      allInvestmentView: true
    }
  },
  cutDescriptionSize: function(description){
    if (!!description) return description.slice(0, 296);
  },
  fitsInBox: function(description){
    return (!description || description.length < 296) ? true : false
  },
  switchView: function(title, industry, ngo, description){
    this.setState({
      allInvestmentView: false,
      title: this.props.title,
      industry: this.props.industry,
      ngo: this.props.ngo,
      description: this.props.description
    })
  },
  render: function() {
    return this.state.allInvestmentView ? (
        <li className="investment" onClick={this.switchView}>
          <div className="investment-display">
            <span className="investment-title">{this.props.title}e</span><br />
            <span className="investment-industry">Industry: {this.props.industry}</span>
            <span className="investment-ngo">NGO: {this.props.ngo}</span><br />
            <span className="investment-description">{this.cutDescriptionSize(this.props.description)}<span className={"hide-" + this.fitsInBox(this.props.description)}>... <a onClick={this.switchView}>Full details</a></span> </span>
          </div>
        </li>
    ) : (
      <div className="larger-investment">
        <span className="investment-title">{this.props.title}e</span><br />
        <span className="investment-industry">Industry: {this.props.industry}</span>
        <span className="investment-ngo">NGO: {this.props.ngo}</span><br />
        <span className="investment-description">{this.props.description}</span>
      </div>
    )
  }
});

var InvestmentNew = React.createClass({
  render: function(){
    return (
      <div id="new-investment-link">
        <button onClick={() => hashHistory.push('/investments/new') }>Add an Investment Opportunity</button>
      </div>
    )
  }
});


module.exports = InvestmentComponent;
