var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;

var NavBarComponent = React.createClass({
  render: function(){
    return(
      <div>
        <ul>
          <a onClick={() => hashHistory.push('/') }>Home</a>
          <a onClick={() => hashHistory.push('/researches') }>Research</a>
          <a onClick={() => hashHistory.push('/investments') }>Investment</a>
          <a onClick={() => hashHistory.push('/log_in') }>Sign In</a>
          <a onClick={() => hashHistory.push('/sign_up') }>Sign Up</a>
          <a onClick={() => hashHistory.push('/sign_out') }>Sign Out</a>
        </ul>
      </div>
    )
  }
});

module.exports = NavBarComponent;
