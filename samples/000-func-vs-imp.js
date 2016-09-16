#!/usr/bin/env node
/* KEY-POINT === IMPERATIF vs FUNCTIONAL === 000-func-vs-imp.js
  On fait déjà tous du fonctionnel 😜
*/

// imperative style 😱
var name = "Bob";
var message = "Hello";
console.log(`${message} ${name}`);

// functional style 😍
function hey({name}) { //🖐 named parameter
  var message = "Hello";
  return `${message} ${name}`;
}

console.log(hey({name:"Bob"})); // 🖐 reuse
console.log(hey({name:"Bob"})); // 🖐 reuse


//✋🏿 input -> output
