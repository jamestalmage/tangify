module.exports = function(karma){
  karma.set({
    frameworks: ['browserify', 'mocha'],

    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "src/math-test.js"
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      '**/*-test.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform : [
        ['bify-ng-test-utils', {sourceMap:true}]
      ]
    },

    singleRun: true,
    autoWatch: false
  });
};