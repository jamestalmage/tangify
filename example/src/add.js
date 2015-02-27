var add = angular.module('math.add', []);

add.value('add',function (lhs, rhs) {return lhs + rhs;});

module.exports = add.name;