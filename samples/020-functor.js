#!/usr/bin/env node
const show = require('../src/tools.js').show;
const Functor = require('../src/Functor.js');

let panda = Functor.of('🐼');

show(panda)

let addRabbit = (me) => me + '🐰'
let addCat = (me) => me + '🐱'

show(
  panda.map(addRabbit)
)

show(
  panda
    .map(addRabbit)
    .map(addCat)
)
