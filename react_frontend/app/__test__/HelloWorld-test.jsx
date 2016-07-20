jest.dontMock('../HelloComponent');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('HelloComponent', function() {
  var HelloComponent = require('../Hello');
  var helloComponent;

  beforeEach(function(){
    helloComponent = TestUtils.renderIntoDocument(<HelloComponent/>);
  });

  it('should say hi', function() {
    expect(helloComponent.getDOMNode().textContent).toBe('Hello World!');
  });
});
