#!/usr/bin/env node
/* KEY-POINT === PURE FUNCTION === 001-pure-func.js

  Avoid side effect, using pure function
  use "pure function":
    - return always the same output for the same input

  not pure:
    - console.log() <> output, == doing something
    - using a variable declared outside the function

  🐼 It's not always possible
  🐵 Think "purely" as possible
*/

// not pure function 😡 🙀

var name = "Bob";

function badHey() {
  console.log(`Hello ${name}`);
}

badHey(); // I'm not sure that `hey()` shows always "Bob" 🤔
          // 😈 can interact with `var name = "Bob";`
          // `hey()` -> void => can't test 😈

// pure function ✨🎉
//TODO search Linter about pure function with JavaScript
// ESLint
function goodHey({name}) { //🖐 named parameter
  return `Hello ${name}`;
}

console.log(goodHey({name:"Bob"}));
