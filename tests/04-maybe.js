"use strict";
const assert = require('chai').assert;

const Maybe = require('../src/Maybe.js');


describe("Bob's mail is bob@github.com", () => {
  let bob = {
    id:'bob',
    address:{ email:'bob@github.com', country:'US'}
  };

  let email = Maybe.fromNullable(bob)
    .map(buddy => buddy.address)
    .map(address => address.email)
    .getOrElse('😢 no email!')

  it("should return 'bob@github.com'", () => {
    assert.equal(email, 'bob@github.com')
  });
});

describe("John hasn't an email", () => {

  let john = {
    id:'john',
    address:{ country:'US' }
  };

  let email = Maybe.fromNullable(john)
    .map(buddy => buddy.address)
    .map(address => address.email)
    .getOrElse('😢 no email!')

  it("should return '😢 no email!'", () => {
    assert.equal(email, '😢 no email!')
  });
});

describe("Jane hasn't an email", () => {

  let jane = { id:'jane' };

  let email = Maybe.fromNullable(jane)
    .map(buddy => buddy.address)
    .map(address => address.email)
    .getOrElse('😢 no email!')

  it("should return '😢 no email!'", () => {
    assert.equal(email, '😢 no email!')
  });
});
