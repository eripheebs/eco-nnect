econnect.controller('PostCtrl', ['$scope', function($scope){

  $scope.posts = [
    {title: 'Solar Panels', description: 'Small research group with 30% efficiency', upvotes: 5},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
  ];

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      description: $scope.description,
      upvotes: 0
    });
    $scope.title = '';
    $scope.link = '';
    $scope.description ='';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}]);
