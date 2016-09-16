"use strict";
const assert = require('chai').assert;
const Monad = require('../src/Monad.js');

describe("Monad value equals 🐼", () => {
  let panda = Monad.of('🐼');
  it("should return 🐼", () => {
    assert.equal(panda.value, '🐼')
  });
});

describe("2 🐯 binds on a 🐼  value equals '🐼🐯🐯'", () => {
  let panda = Monad.of('🐼');
  let addTiger = (me) => Monad.of(me + '🐯')

  it("should return '🐼🐯🐯'", () => {
    assert.equal(panda.bind(addTiger).bind(addTiger).value, '🐼🐯🐯')
  });
});
