var xValue = 8
var yValue = 2

// Higher-order function
function calculation(calc) {
  return calc(xValue, yValue)
}

// Function for arguments
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

// Assign a function as an argument value
console.log(calculation(add)) // 10
console.log(calculation(sub)) // 6
console.log(calculation(multi)) // 16
console.log(calculation(div)) // 4

// ====================================
//            Output Sample
// ====================================
// 10
// 6
// 16
// 4