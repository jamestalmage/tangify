add = angular.module "math.add", []

add.value 'add', (lhs, rhs) -> lhs + rhs

module.exports = add.name