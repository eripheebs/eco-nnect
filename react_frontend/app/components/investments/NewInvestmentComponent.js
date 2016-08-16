var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var Auth = require('j-toker');
var _ = require('lodash');

var NewInvestmentComponent = React.createClass({
  getInitialState:function(){
    return {
      isLoggedIn: false
    }
  },
  componentDidMount:function(){
    Auth.validateToken().then(function(){
      this.setState({ user_id : Auth.user.id,
        isLoggedIn: Auth.user.signedIn
      });
    }.bind(this));
  },
  render: function(){
    return this.state.isLoggedIn ? <NewInvestmentForm user_id={this.state.user_id} /> : (<p>You must be logged in to create add an Investment Opportunity.</p>)
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
      user_id: '',
      message: ''
    };
  },
  getDefaultProps: function() {
    return {origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''};
  },
  _newInvestment: function(){
    Auth.validateToken().then(function(){
      this.postToApi()
    }.bind(this))
  },
  postToApi: function(){
    Reqwest({
      url: this.props.origin + '/investments',
      type: 'json',
      method: 'post',
      headers: Auth.retrieveData('authHeaders'),
      contentType: 'application/json',
      data: {
        "investment": {
          "title": this.state.title,
          "industry": this.state.industry,
          "ngo": this.state.ngo,
          "description": this.state.description,
          "user_id": this.props.user_id
        }
      }.to_json,
      success: function(){
        this.setState({message: "Your investment opportunity" + this.state.title + "has been stored."})
      }.bind(this),
      error: function(error) {
        console.error("ERROR");
      }
    });
  },
  render: function(){
    return(
      <div>
        <input placeholder='Title' type='text' name='title'
          value={this.state.title}
          onChange={this._handleInputChange} />
        <input placeholder='Industry' type='text' name='industry'
          value={this.state.industry}
          onChange={this._handleInputChange} />
        <input placeholder='NGO' type='text' name='ngo'
          value={this.state.ngo}
          onChange={this._handleInputChange} />
        <input placeholder='Description' type='text' name='description'
          value={this.state.description}
          onChange={this._handleInputChange} />
        <button className='btn btn-primary' onClick={this._newInvestment} > Create New Investment </button>
        {this.state.message}
      </div>
    )
  }
});

module.exports = NewInvestmentComponent;
