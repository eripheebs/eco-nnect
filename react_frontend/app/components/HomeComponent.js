var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;

var HomeComponent = React.createClass({
  render: function(){
    return (
      <div id="home-nav-box">
        <ul>
          <a onClick={() => hashHistory.push('/researches') }>Research</a>
          <a onClick={() => hashHistory.push('/investments') }>Investment</a>
        </ul>
      </div>
    )
  }
});

module.exports = HomeComponent;
