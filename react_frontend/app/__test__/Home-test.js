jest.dontMock('../components/HomeComponent');

require('react');
require('react-dom');
var TestUtils = require('react-addons-test-utils');

describe('HomeComponent', function () {
  var HomeComponent = require('../components/HomeComponent');
  var homeComponent;

  beforeEach(function () {
    homeComponent = TestUtils.renderIntoDocument(<HomeComponent/>);
  })

  it('has an investment button', function () {

  })

  it('has a research button', function () {
    
  })
})
