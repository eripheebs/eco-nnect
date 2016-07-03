module.exports = function(config) {
  config.set({
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      "frontend/bower_components/angular/angular.js",
      "frontend/bower_components/angular-mocks/angular-mocks.js",
      "frontend/bower_components/angular-ui-router/release/angular-ui-router.js",
      "frontend/bower_components/angular-cookie/angular-cookie.js",
      "frontend/bower_components/ng-token-auth/dist/ng-token-auth.js",
      "frontend/bower_components/jquery/dist/jquery.js",
      'frontend/js/*.js',
      'frontend/js/**/*.js',
      'test/unit/*.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}
