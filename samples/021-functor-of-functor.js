#!/usr/bin/env node
const show = require('../src/tools.js').show;
const Functor = require('../src/Functor.js');

let panda = Functor.of('🐼');

let addTiger = (me) => Functor.of(me + '🐯')

show(
  panda
    .map(addTiger).value // <- value == Functor
)


show(
  panda
    .map(addTiger).value.value
)
