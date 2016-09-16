#!/usr/bin/env node
const show = require('../src/tools.js').show;
const Maybe = require('../src/Maybe.js');

show( Maybe.fromNullable(42) )
show( Maybe.fromNullable(null) )

console.log(Maybe.fromNullable(42).getOrElse("Quarante-deux"))
console.log(Maybe.fromNullable(null).getOrElse("Quarante-deux"))
