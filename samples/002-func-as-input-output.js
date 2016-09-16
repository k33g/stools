#!/usr/bin/env node
/* KEY-POINT === Function as input and output ===
002-func-as-input-output.js
*/

// a function that returns a function that returns a string
function youAreSo(adjective) {
  return function(name) {
    return `${name}, you are so ${adjective}`
  }
}

let youAreSoAmazing = youAreSo("✨");
let youAreSoLovely = youAreSo("💛💚💙");

console.log(youAreSoAmazing("Bob"));
console.log(youAreSoLovely("Bob"));

/*
  - simplify code, lisibility
  - help for reuse
*/
console.log(youAreSoAmazing("Sam"));
console.log(youAreSoLovely("Sam"));
