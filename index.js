'use strict';

var through      = require('through2');
var transformify = require('transformify');
var transform    = require('tang');
var merge        = require('merge');

module.exports = function (file, opts) {
  if(/\.json$/.test(file)) return through();
  opts = merge({
    sourceFileName:file,
    appendSourceMapComment:true
  }, opts);
  return transformify(function(contents){
    return transform(contents, opts).code;
  })();
};
