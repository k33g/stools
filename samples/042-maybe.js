#!/usr/bin/env node
const show = require('../src/tools.js').show;
const Maybe = require('../src/Maybe.js');

const GitHubClient = require('./GitHubClient.js').GitHubClient;

let githubCli = new GitHubClient({
  baseUri: "http://github.at.home/api/v3", // on peut malformer ici
  token:process.env.TOKEN_GHE_27_K33G
})

let getUser = (handle) => {
  return githubCli.fetchUser({handle:handle}).then(user => {
    return Maybe.Some(user)
  }).catch(error => {
    return Maybe.None()
  })
}

getUser("k33g").then(user => {
  console.log("😛", user.map(user=>user.email).getOrElse('😢 no user'))
})

getUser("k33_g").then(user => {
  console.log("😡", user.map(user=>user.email).getOrElse('😢 no user'))
})
