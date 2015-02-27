var subtract = angular.module('math.subtract', []);

subtract.value('subtract',function(lhs,rhs){return lhs - rhs});

module.exports= subtract.name;