var gulp = require('gulp');

var browserify = require('browserify');

var utils = require('angular-test-utils-test-utils');
var karma = require('karma').server;
var tang = require('./');
var coffeeify = require('coffeeify');

var source =require('vinyl-source-stream');


function makeBundleTask(fileName, error){
  fileName += error ? '-error.js' : '.js';
  return function() {
    var bundleStream = browserify(
      {
        debug:true,
        entries:'./example/test/' + fileName,
        extensions:['.coffee','.js']
      })
      .transform(coffeeify,   {sourceMap:true})
      .transform(tang, {sourceMap:true})
      .bundle();

    return bundleStream
      .pipe(source(fileName))
      .pipe(gulp.dest('./build'));
  };
}

function makeTestTask(fileName,error){
  return function(cb) {
    karma.start(
      utils.karmaTemplate(
        fileName,
        error,
        [
          'node_modules/angular/angular.js',
          'node_modules/angular-mocks/angular-mocks.js',
          'build/{prefix}{error}.js'
        ],
        {
          preprocessors: {
            '**/*.js':'sourcemap'
          }
        }
      ),
      cb
    );
  }
}

function makeErrorTestTask(fileName,regexp){
  var testTask = makeTestTask(fileName, true);
  return function(cb){
    testTask(utils.validateErrorMapping(
      './build/' + fileName + '-error-report.xml',
      regexp,
      cb
    ))
  ;}
}

gulp.task('bundle', makeBundleTask('math-test'));
gulp.task('test', ['bundle'], makeTestTask('math-test'));
gulp.task('bundle-coffee', makeBundleTask('math-test-coffee'));
gulp.task('test-coffee', ['bundle-coffee'], makeTestTask('math-test-coffee'));
gulp.task('bundle-error', makeBundleTask('math-test', true));
gulp.task('test-error', ['bundle-error'],makeErrorTestTask('math-test',/math-test-error.js:31:\d+/));
gulp.task('bundle-coffee-error', makeBundleTask('math-test-coffee', true));
gulp.task('test-coffee-error', ['bundle-coffee-error'],makeErrorTestTask('math-test-coffee',/math-test-error.coffee:25:\d+/));

gulp.task('success',['test','test-coffee', 'test-error', 'test-coffee-error'], utils.success);

gulp.task("default",["success"]);
