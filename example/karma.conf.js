module.exports = function(karma){
  karma.set({
    frameworks: ['browserify', 'mocha'],

    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "test/**"
    ],

    browsers: ['PhantomJS'],

    preprocessors: {
      '**/*-test.*': ['browserify']
    },

    reporters: ['mocha'],

    browserify: {
      debug: true,
      extensions : ['.js', '.coffee'],
      transform : [
        'coffeeify',
        ['bify-ng-test-utils', {sourceMap:true}]
      ]
    },

    singleRun: true,
    autoWatch: false
  });
};