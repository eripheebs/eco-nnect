var econnect = angular.module('econnect', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/posts');

  $stateProvider
    .state('posts', {
      url: '/posts',
      templateUrl: "views/posts.html",
      controller: 'PostCtrl'
    })
    .state('research', {
      url: '/research',
      templateUrl: "views/research.html",
      controller: 'ResearchCtrl'
    })
    .state('investments', {
      url: '/investments/{id}',
      templateUrl: 'views/investments.html',
      controller: 'InvestmentsCtrl'
    });

});
