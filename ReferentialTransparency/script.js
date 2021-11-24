var xValue = 8
var yValue = 2

// Function without side effects
function add(x, y) {
  return x + y
}
function sub(x, y) {
  return x - y
}
function multi(x, y) {
  return x * y
}
function div(x, y) {
  return x / y
}

console.log(add(xValue, yValue)) // 10
console.log(sub(xValue, yValue)) // 6
console.log(multi(xValue, yValue)) // 16
console.log(div(xValue, yValue)) // 4

// This function has side effects because it modifies the value of the variable.
// function add_(x, y) {
//   xValue = x + y
//   return xValue
// }
// console.log(add_(xValue, yValue)) // 10
// console.log(add_(xValue, yValue)) // 12


// ====================================
//            Output Sample
// ====================================
// 10
// 6
// 16
// 4