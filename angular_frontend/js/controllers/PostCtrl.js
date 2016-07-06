econnect.controller('PostCtrl', ['$scope', '$http', function($scope, $http){

  $scope.posts = [
    {title: 'Solar Panels', description: 'Small research group with 30% efficiency', upvotes: 5},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
    {title: 'Another Post', description: 'Balh blah blah', upvotes: 2},
  ];
  //
  // $scope.posts = _getInvestments();
  //
  // function _getInvestments(){
  //   return $http.get('http://localhost:3000/investments')
  //     .then(_handleResponseFromApi);
  // };
  //
  // function _handleResponseFromApi(response){
  //   return response.data;
  // };


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
