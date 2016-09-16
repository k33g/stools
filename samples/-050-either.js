#!/usr/bin/env node
const GitHubClient = require('./GitHubClient.js').GitHubClient;

let githubCli = new GitHubClient({
  baseUri: "http://github.at.home/api/v3",
  token:process.env.TOKEN_GHE_27_K33G
})

githubCli.fetchUserRepositories({handle:"k33g"}).then(repositories => {
  console.log("🤖:", repositories);
  repositories.forEach(repo => console.log(repo.name))
}).catch(error => {
  console.log("😡", error.message, error);
})

githubCli.fetchOrganizationRepositories({organization:"AC ME"}).then(repositories => {
  console.log("🤖:", repositories);
  repositories.forEach(repo => console.log(repo.name))
}).catch(error => {
  console.log("😡", error.message, error);
})
