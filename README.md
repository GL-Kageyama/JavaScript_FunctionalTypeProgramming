# JavaScript : Functional Type Programming

## Functional Type Programming
1, All functions return a value.  
2, Function has no side effects.  
3, Treat function as value.  

## Code Sample
```JavaScript
// All functions return a value.  
function helloWorld() {
  return "Hello Functional JavaScript !"
}

var xValue = 8
var yValue = 2

function calculation(calc) {
  return calc(xValue, yValue)
}

// Function has no side effects. 
function add(x, y) {
  return x + y
}

// Treat function as value.  
console.log(calculation(add)) // 10
```
