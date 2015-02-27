'use strict';

var through      = require('through2');
var transformify = require('transformify');
var transform    = require('ng-test-utils/src/ngInject');
var convert = require('convert-source-map');

//module.exports =

  function oldway (file, options) {
  if (/\.json$/.test(file)) return through();
  return transformify(doTransform)();
};


function injectify(file){
  if(isJson(file)) return through();

  var data = '', stream = through(write, end);

  return stream;

  function write(buf, encoding, callback){
    data += buf;
    callback();
  }

  function end(cb){
    var result = transform(data, {sourceFileName:file});
    var map = convert.fromObject(result.map);
    map.setProperty('sources',[file]);
    this.push(result.code + '\n' + map.toComment() + '\n');
    cb();
  }
}

function isJson(file){
  return /\.json$/.test(file);
}

module.exports = injectify;