var econnect = angular.module('econnect', ['ui.router', 'ng-token-auth'])

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

})

.config(function($authProvider) {
    $authProvider.configure({
      apiUrl: 'http://localhost:3000/api/auth',
      tokenValidationPath:     'http://localhost:3000/api/auth/validate_token',
      signOutUrl:              'http://localhost:3000/api/auth/sign_out',
      emailRegistrationPath:   'http://localhost:3000/api/auth/sign_up',
      accountUpdatePath:       'http://localhost:3000/api/auth',
      accountDeletePath:       'http://localhost:3000/api/auth',
      confirmationSuccessUrl:  window.location.href,
      passwordResetPath:       'http://localhost:3000/api/auth/password',
      passwordUpdatePath:      'http://localhost:3000/api/auth/password',
      passwordResetSuccessUrl: window.location.href,
      emailSignInPath:         'http://localhost:3000/api/auth/sign_in',
      storage:                 'cookies',
      forceValidateToken:      false,
      validateOnPageLoad:      true,
      proxyIf:                 function() { return false; },
      omniauthWindowType:      'sameWindow',
      authProviderPaths: {
        facebook: 'http://localhost:3000/api/auth/facebook',
        google:   'http://localhost:3000/api/auth/google'
      },
      tokenFormat: {
        "access-token": "{{ token }}",
        "token-type":   "Bearer",
        "client":       "{{ clientId }}",
        "expiry":       "{{ expiry }}",
        "uid":          "{{ uid }}"
      },
      cookieOps: {
        path: "/",
        expires: 9999,
        expirationUnit: 'days',
        secure: false,
        domain: 'domain.com'
      },
      createPopup: function(url) {
        return window.open(url, '_blank', 'closebuttoncaption=Cancel');
      },
      parseExpiry: function(headers) {
        return (parseInt(headers['expiry']) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountUpdateResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });
});
