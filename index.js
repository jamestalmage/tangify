'use strict';

var through      = require('through2');
var transformify = require('transformify');
var transform    = require('ng-test-utils/src/ngInject');
var convert      = require('convert-source-map');

module.exports = function (file, opts) {
  if(/\.json$/.test(file)) return through();
  return transformify(injectAnnotatedDependencies(file, opts))();
};

function injectAnnotatedDependencies(file, opts){
  return function (contents){
    if(opts._flags.debug){
      var inputSourceMap = convert.fromSource(contents);
      if(inputSourceMap) {
        inputSourceMap = inputSourceMap.toObject();
      }
      var result = transform(contents, {
        sourceFileName: file,
        inputSourceMap: inputSourceMap
      });
      var map = convert.fromObject(result.map);
      return result.code + '\n' + map.toComment() + '\n';
    }
    else {
      return transform(contents).code;
    }
  }
}
