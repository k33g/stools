#!/usr/bin/env node
const GitHubClient = require('./GitHubClient.js').GitHubClient;

const show = require('../src/tools.js').show;
const Validation = require('../src/Validation.js');

Validation.Success(40).cata(
  error => {console.log("😡", error)},
  success => {
    console.log("😛", success)
  }
)

Validation.Fail("Oups I did it again!").cata(
  error => {console.log("😡", error)},
  success => {
    console.log("😛", success)
  }
)
