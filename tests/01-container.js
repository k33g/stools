"use strict";
const assert = require('chai').assert;

const Container = require('../src/Container.js');


describe("container value equals 42", () => {
  let container = Container.of(42)
  it("should return 42", () => {
    assert.equal(container.value, 42)
  });
});

describe("container value equals 'Bob Morane'", () => {
  let bob = Container.of('Bob Morane')
  it("should return 'Bob Morane'", () => {
    assert.equal(bob.value, 'Bob Morane')
  });
});
