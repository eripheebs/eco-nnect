module.exports = function(config) {
  config.set({
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      "angular_frontend/bower_components/angular/angular.js",
      "angular_frontend/bower_components/angular-mocks/angular-mocks.js",
      "angular_frontend/bower_components/angular-ui-router/release/angular-ui-router.js",
      "angular_frontend/bower_components/angular-cookie/angular-cookie.js",
      "angular_frontend/bower_components/ng-token-auth/dist/ng-token-auth.js",
      "angular_frontend/bower_components/jquery/dist/jquery.js",
      'angular_frontend/js/*.js',
      'angular_frontend/js/**/*.js',
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
