"use strict";
const assert = require('chai').assert;

const Functor = require('../src/Functor.js');

describe("functor value equals 🐼", () => {
  let panda = Functor.of('🐼');
  it("should return 🐼", () => {
    assert.equal(panda.value, '🐼')
  });
});

describe("Functor value equals '🐼🐰🐱'", () => {
  let panda = Functor.of('🐼');
  let addRabbit = (me) => me + '🐰'
  let addCat = (me) => me + '🐱'

  it("should return '🐼🐰🐱'", () => {
    assert.equal(panda.map(addRabbit).map(addCat).value, '🐼🐰🐱')
  });
});
