var subtract = angular.module('math.total', []);

subtract.factory('total',function(sum){
  return sum; // essentially, this means `total` is just a alias for `sum`
});

module.exports= subtract.name;