describe('math', function() {
  var mathModule = require('../src/');
  beforeEach(angular.mock.module(mathModule));

  // @ngProvide
  var sum = function(){
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
      total = add(total, arguments[i]);
    }
    return total;
  };

  // @ngInject
  var add, subtract, total;

  it('add', function() {
    var result = add(2, 2);
    assert.equals(4, result);
  });

  it('subtract', function(){
    var result = subtract(4, 2);
    assert.equals(2, result);
  });

  it('total', function(){
    // `total` aliases sum, and the default implementation of `sum` throws an error.
    // The `ngProvide` annotation above provides an alternate implementation of sum, which is why this works.
    assert.equals(15, total(1,2,3,4,5));
    throw new Error('e');
  });

  var assert = {
    equals:function(expected, actual){
      if(expected !== actual) throw new Error('expected ' + expected + ' to equal ' + actual);
    }
  }
});