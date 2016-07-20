jest.dontMock('../components/HelloComponent');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

describe('HelloComponent', function() {
  var HelloComponent = require('../components/HelloComponent');
  var helloComponent;

  beforeEach(function(){
    helloComponent = TestUtils.renderIntoDocument(<HelloComponent/>);
  });

  it('should say hi', function() {
    var helloDiv = TestUtils.findRenderedDOMComponentWithTag(helloComponent, 'div')
    expect(helloDiv.textContent).toBe('Hello World!');
  });
});
