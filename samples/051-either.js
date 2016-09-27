#!/usr/bin/env node
const GitHubClient = require('./GitHubClient.js').GitHubClient;

const show = require('../src/tools.js').show;
const Either = require('../src/Either.js');

let githubCli = new GitHubClient({
  baseUri: "http://github.at.home/api/v3", // on peut malformer ici
  token:process.env.TOKEN_GHE_27_K33G
})

let getReposOf = (handle) => {
  return githubCli.fetchUserRepositories({handle:handle}).then(repositories => {
    return Either.Right(repositories)
  }).catch(error => {
    return Either.Left(`Error 😡:${error.message} ${error.status}`)
  })
}

getReposOf("k33g").then(results => {
  results.isRight()
  ? results.value.forEach(repo => console.log(repo.name))
  : console.log(results.value)
})

getReposOf("k33_g").then(results => {
  results.isRight()
  ? results.value.forEach(repo => console.log(repo.name))
  : console.log(results.value)
})
