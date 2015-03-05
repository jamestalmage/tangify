"use strict"
describe "math-coffee",  =>
  math = require "../src"

  beforeEach angular.mock.module math

  ### @ngProvide ###
  sum = (values...) ->
    values.reduce (t, s) -> t + s

  ### @ngInject ###
  `var add, subtract, total`

  it "add", =>
    result = add 2, 2
    assert.equals 4, result

  it "subtract", =>
    result = subtract 4, 2
    assert.equals 2, result

  it "total", =>
    result = total 2, 4, 6, 8
    assert.equals 20, result

  assert =
    equals: (expected, actual) =>
      throw new Error 'expected' + expected + ' to equal ' + actual if expected != actual