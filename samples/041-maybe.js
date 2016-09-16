#!/usr/bin/env node
const show = require('../src/tools.js').show;
const Maybe = require('../src/Maybe.js');

let bob = {
  id:'bob',
  address:{ email:'bob@github.com', country:'US'}
};

let john = {
  id:'john',
  address:{ country:'US' }
};

let jane = { id:'jane' };

show( // show email
  Maybe.fromNullable(bob)
    .map(buddy => buddy.address)
    .map(address => address.email)
    .getOrElse('😢 no email!')
)

show(
  Maybe.fromNullable(john)
  .map(buddy => buddy.address)
  .map(address => address.email)
  .getOrElse('😢 no email!')
)

show(
  Maybe.fromNullable(jane)
  .map(buddy => buddy.address)
  .map(address => address.email)
  .getOrElse('😢 no email!')
)
