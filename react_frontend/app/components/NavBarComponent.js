var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;

var NavBarComponent = React.createClass({
  render: function(){
    return(
      <div>
        <ul>
          <a onClick={() => hashHistory.push('/') }>Home</a>
          <a onClick={() => hashHistory.push('/research') }>Research</a>
          <a onClick={() => hashHistory.push('/investment') }>Investment</a>
        </ul>
      </div>
    )
  }
});

module.exports = NavBarComponent;
