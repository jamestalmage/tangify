"use strict"
describe "math-coffee",  =>
  math = require "../src"

  beforeEach angular.mock.module math

  ### @ngInject ###
  `var add, subtract`

  it "add", =>
    result = add 2, 2
    assert.equals 4, result

  it "subtract", =>
    result = subtract 4, 2
    assert.equals 2, result

  assert =
    equals: (expected, actual) =>
      throw new Error 'expected' + expected + ' to equal ' + actual if expected != actual