module.exports = (add = angular.module "math.add", []).name

add.value 'add', (lhs, rhs) -> lhs + rhs
