#!/usr/bin/env node

// === Catamorphisme ===

const GitHubClient = require('./GitHubClient.js').GitHubClient;

const show = require('../src/tools.js').show;
const Either = require('../src/Either.js');

/*
let githubCli = new GitHubClient({
  baseUri:"https://api.github.com",
  token:process.env.TOKEN_GITHUB_DOT_COM
});
*/
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
  // inspiré par Monet.js
  results.cata((errorMessage) => {
    console.log(`Hey 🖐, something wrong, ${errorMessage}`)
  }, (repos) => {
    console.log(repos.map((repos) => repos.name).join(", "))
  })
})

getReposOf("k3=3g").then(results => {
  // inspiré par Monet.js
  results.cata((errorMessage) => {
    console.log(`Hey 🖐, something wrong, ${errorMessage}`)
  }, (repos) => {
    console.log(repos.map((repos) => repos.name).join(", "))
  })
})
