#!/usr/bin/env node
const show = require('../src/tools.js').show;
const Monad = require('../src/Monad.js');

let panda = Monad.of('🐼');

let addTiger = (me) => Monad.of(me + '🐯')

show(
  panda
    .bind(addTiger)
    .bind(addTiger)
)
show(
  panda
    .bind(addTiger)
    .bind(addTiger).value
)
