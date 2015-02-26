'use strict';

var through      = require('through2');
var transformify = require('transformify');
var transform    = require('ng-test-utils/src/ngInject');

module.exports = function (file, options) {
  if (/\.json$/.test(file)) return through();
  return transformify(doTransform)();
};

function doTransform (code) {
  return transform(code).code;
}