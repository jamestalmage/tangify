describe('math', function() {
  var mathModule = require('./math');

  beforeEach(angular.mock.module(mathModule.name));

  // @ngInject
  var add, subtract;

  it('add', function() {
    var result = add(2, 2);
    assert.equals(4, result);
  });

  it('subtract', function(){
    var result = subtract(4, 2);
    assert.equals(2, result);
  });

  var assert = {
    equals:function(expected, actual){
      if(expected != actual) throw new Error('expected ' + expected + ' to equal ' + actual);
    }
  }
});