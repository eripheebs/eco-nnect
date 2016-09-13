var React = require('react');
var ReactDOM = require('react-dom');
var Reqwest = require('reqwest');
var MainComponent = require('../MainComponent');
var $ = require('jquery');
var Auth = require('j-toker');

$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    Auth.appendAuthHeaders(xhr, settings);
  }
});

var NewResearchComponent = React.createClass({
  checkSession: function(){
    Auth.validateToken()
      .then(function(user) {
        console.log("token validated")
        this.setState({
          userEmail: user.email,
          signedIn: true
        })
      }.bind(this))
      .fail(function() {
        console.log("no user logged in")
      });
  },
  getInitialState: function() {
    return {
      signedIn: null,
      userEmail: null,
      user: Auth.user,
      updateSession: this.checkSession()
    };
  },
  componentWillMount: function() {
    this.checkSession()
  },
  render: function(){
    return this.state.signedIn ? <NewResearchForm user={this.state.user} /> : <p>You must be logged in to crate add an Research Opportunity.</p>
  }
});

var NewResearchForm = React.createClass({
  submitResearch: function(url, successFunction) {
    $.ajax({
      type: "POST",
      url: url,
      data: {
        'research': {
          'title': this.state.title,
          'industry': this.state.industry,
          'ngo': this.state.ngo,
          'description': this.state.description
        }
      },
      success: successFunction,
      dataType: 'json'
    }).fail(function(){
      this.setState({messages: 'Something went wrong.', alert: "alert alert-danger"});
    }.bind(this));
  },
  _handleInputChange: function(ev) {
    var nextState = _.cloneDeep(this.state);

    nextState[ev.target.name] = ev.target.value;

    this.setState(nextState);
  },
  getInitialState: function() {
    return {
      topic: '',
      description: '',
      messages: '',
      files: [],
      alert: ''
    };
  },
  _handleNewResearchClick: function(e) {
    this.submitResearch('http://localhost:3001/researches', function(){
      this.setState({messages: 'Your research has been submitted.', alert: "alert alert-success"});
    }.bind(this));
  },
  handleChangeFile: function (evt) {
    console.log("Uploading");
    var self = this;
    var files = evt.target.files;

    for(var i = 0; i< files.length; i++) {
      var file = files[i];

      var reader = new FileReader();

      reader.onload = function(upload) {
        self.state.files.push(upload.target.result);
        console.log("file" + (i+1) + "uploaded");
      };

      reader.readAsDataURL(file);
    }
    console.log("Files uploaded");
    this.setState({messages: 'Files uploaded.', alert: "alert alert-success"});
  },
  render: function(){
    return <div className="form-box"><h2>New Research</h2>
      <label>Topic</label>
      <input type='text'
        className="form-control"
        name='topic'
        placeholder='topic'
        value={this.state.topic}
        onChange={this._handleInputChange} />
      <label>Description</label>
      <textarea className="form-control" rows="5"
        name='description'
        placeholder='description'
        value={this.state.description}
        onChange={this._handleInputChange} ></textarea>

      <input type="file"
        name="files"
        onChange={this.handleChangeFile}
        encType="multipart/form-data"
        multiple/>

      <button className='btn btn-primary' onClick={this._handleNewResearchClick} > Submit </button>
      <div className={this.state.alert} id="success-error-messages">{this.state.messages}</div>
    </div>
  }
});

module.exports = NewResearchComponent;
