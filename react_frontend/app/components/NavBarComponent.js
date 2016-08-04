var React = require('react');
var ReactDOM = require('react-dom');
var hashHistory = require('react-router').hashHistory;
var ReactPropTypes = React.PropTypes;

var NavBarComponent = React.createClass({
  propTypes: {
    isLoggedIn: ReactPropTypes.bool
  },
  render: function(){
    return this.props.isLoggedIn ? (
      <nav className="[ navbar navbar-fixed-top ][ navbar-navigation animate ]" role="navigation">
        <div className="[ container ]">
          <div className="[ navbar-header ]">
            <button type="button" className="[ navbar-toggle ]" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="[ sr-only ]">Toggle navigation</span>
              <span className="[ icon-bar ]"></span>
              <span className="[ icon-bar ]"></span>
              <span className="[ icon-bar ]"></span>
            </button>
            <div className="[ animbrand ]">
              <a className="[ navbar-brand ][ animate ]" onClick={() => hashHistory.push('/')}>Eco-nnect</a>
            </div>
          </div>

          <div className="[ collapse navbar-collapse ]" id="bs-example-navbar-collapse-1">
            <ul className="[ nav navbar-nav navbar-right ]">
              <li><a className="[ animate ]" onClick={() => hashHistory.push('/') }>Home</a></li>
              <li><a className="animate" onClick={() => hashHistory.push('/researches') }>Research</a></li>
              <li><a className="animate" onClick={() => hashHistory.push('/investments') }>Investment</a></li>
              <li><a className="[ animate ]" onClick={() => hashHistory.push('/sign_out') }>Sign Out</a></li>
            </ul>
          </div>
        </div>
      </nav>
    ) : (
      <nav className="[ navbar navbar-fixed-top ][ navbar-navigation animate ]" role="navigation">
        <div className="[ container ]">
          <div className="[ navbar-header ]">
            <button type="button" className="[ navbar-toggle ]" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="[ sr-only ]">Toggle navigation</span>
              <span className="[ icon-bar ]"></span>
              <span className="[ icon-bar ]"></span>
              <span className="[ icon-bar ]"></span>
            </button>
            <div className="[ animbrand ]">
              <a className="[ navbar-brand ][ animate ]" onClick={() => hashHistory.push('/')}>Eco-nnect</a>
            </div>
          </div>

          <div className="[ collapse navbar-collapse ]" id="bs-example-navbar-collapse-1">
            <ul className="[ nav navbar-nav navbar-right ]">
              <li><a className="[ animate ]" onClick={() => hashHistory.push('/') }>Home</a></li>
              <li><a className="animate" onClick={() => hashHistory.push('/researches') }>Research</a></li>
              <li><a className="animate" onClick={() => hashHistory.push('/investments') }>Investment</a></li>
              <li>
      					<a href="#" className="[ dropdown-toggle ][ animate ]" data-toggle="dropdown">Sign In <span className="[ caret ]"></span></a>
      					  <ul className="[ dropdown-menu ]" role="menu">
      						  <li><a className="[ animate ]" onClick={() => hashHistory.push('/log_in') }>Sign In</a></li>
      						  <li><a className="[ animate ]" onClick={() => hashHistory.push('/sign_up') }>Sign Up</a></li>
      						</ul>
      				</li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = NavBarComponent;
