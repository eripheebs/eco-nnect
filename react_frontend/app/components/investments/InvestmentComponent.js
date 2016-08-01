var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var hashHistory = require('react-router').hashHistory;

var InvestmentComponent = React.createClass({
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
      <div>
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
        <Investment key={investment.id} industry={investment.industry} ngo={investment.ngo} />
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
  render: function() {
    return (
      <li className="investment">
        <span className="investment-text"> {this.props.ngo}</span>
      </li>
    );
  }
});

var InvestmentNew = React.createClass({
  render: function(){
    return (
      <div id="new-investment-link">
        <a onClick={() => hashHistory.push('/investment/new') }>Home</a>
      </div>
    )
  }
})


module.exports = InvestmentComponent;
