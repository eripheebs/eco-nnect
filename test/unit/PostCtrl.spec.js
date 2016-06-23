describe('PostCtrl', function() {
  beforeEach(module('econnect'));

  var ctrl, scope;

  var postData = {title: 'fake post', upvotes: 0};

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new;
    ctrl = $controller('PostCtrl', {
      $scope: scope
    });
  }));

  it('it adds a new post', function() {
    scope.title = 'fake post'
    scope.addPost();
    expect(scope.posts).toContain(postData);
  });

  it('it add nothing when no title is given', function() {
    scope.addPost();
    expect(scope.posts).not.toContain(postData);
  });

});
