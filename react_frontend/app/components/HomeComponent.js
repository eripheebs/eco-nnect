var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;

var HomeComponent = React.createClass({
  render: function(){
    return (
      <div id="home-nav-box">
        <div id="home-welcome">
          Welcome to Eco-nnect
          <p id="home-sub-text">Here you can have text or stuff orro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
        </div>
        <ul>
          <button id="home-research" onClick={() => hashHistory.push('/researches') }>Research</button>
          <button id="home-investments" onClick={() => hashHistory.push('/investments') }>Investment</button>
        </ul>
      </div>
    )
  }
});

module.exports = HomeComponent;
