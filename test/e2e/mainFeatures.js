describe('econnect', function() {

  it('Homepage loads', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Eco-nnect')
  });

  it('Clicking changes content of main 2 feeds', function() {
    browser.get('https://eripheebs.github.io/');
    $('#research-button').click();
    var template = element(by.css('#main-content'));
    expect(template.getText()).toContain('Research Feed');
  });

  var includeElement = element(by.css('[ng-include]'));

  it('should load views e.g. research.html', function() {
    expect(includeElement.getText()).toContain("Research Feed");
  });

});
