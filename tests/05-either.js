"use strict";
const assert = require('chai').assert;

const Either = require('../src/Either.js');


describe("foo is a geek calculation", () => {
  let foo = Either.Right(42).cata(
    err => {
      console.log("😡", err);
      return err
    },
    res => {
      console.log("🤖:", res);
      return res
    }
  )

  it("should return 42", () => {
    assert.equal(foo, 42)
  });
});

describe("foo is a bad geek calculation", () => {
  let foo = Either.Left("bouh!").cata(
    err => {
      console.log("😡", err);
      return err
    },
    res => {
      console.log("🤖:", res);
      return res
    }
  )

  it("should return bouh!", () => {
    assert.equal(foo, "bouh!")
  });
});
