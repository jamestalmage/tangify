'use strict';

var through      = require('through2');
var transformify = require('transformify');
var transform    = require('ng-test-utils');

module.exports = function (file, opts) {
  if(/\.json$/.test(file)) return through();
  return transformify(injectAnnotatedDependencies(file, opts))();
};

function injectAnnotatedDependencies(file, opts){
  return function (contents){
    if(opts._flags.debug){
      return transform(contents, {
        sourceMap:true,
        sourceFileName:file,
        appendSourceMapComment:true
      }).code;
    }
    else {
      return transform(contents).code;
    }
  }
}
