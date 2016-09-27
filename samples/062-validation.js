#!/usr/bin/env node
const GitHubClient = require('./GitHubClient.js').GitHubClient;

const show = require('../src/tools.js').show;
const Validation = require('../src/Validation.js');

let githubCli = new GitHubClient({
  baseUri:"http://github.at.home/api/v3",
  token:process.env.TOKEN_GHE_27_K33G
});


let checkTitle = (title) => {
  return title !== undefined
    ? Validation.Success(title)
    : Validation.Fail(["😡 No Title!"])
}

let checkBody = (body) => {
  return body !== undefined
    ? Validation.Success(body)
    : Validation.Fail(["💔 No Details!"])
}

let checkOwner = (owner) => {
  return owner !== undefined
    ? Validation.Success(owner)
    : Validation.Fail(["🍄 No Owner!"])
}

let checkRepo = (repo) => {
  return repo !== undefined
    ? Validation.Success(repo)
    : Validation.Fail(["😱 No Repository!"])
}

let assigneeExists = (assignee) => {
  let assignees = ["k33g", "jeanlouc", "spocky"];
  if (assignees.find(item => item == assignee)) {
    return assignee
  } else {
    throw new Error("👎 this person does not exist!")
  }
}

let checkAssignee = (assignee) => {
  try {
    let res = assigneeExists(assignee)
    return Validation.Success(res)
  } catch (err) {
    return Validation.Fail([err.message])
  }
}

// je veux tester des succes = un ensemble d'appel de fonction
Validation.of(
  (title) =>
    (body) =>
      (owner) =>
        (repo) =>
          (assignee) => { return {title, body, owner, repo, assignee} } // the result
)
.ap(checkTitle("AlpesJUG - Grenoble"))
.ap(checkBody(["## I've got a problem", "> this a WIP", ":octocat:", ":heart:"].join("")))
.ap(checkOwner("UnitedFederationOfPlanets"))
.ap(checkRepo("repo-00")) // "repo-00"
.ap(checkAssignee("k33g")) // "k33g"
.cata(
  (errors) => console.log(errors),
  (result) => {
    console.log("👏 you can now create the issue with:", result)

    githubCli.createIssue({
      title: result.title,
      body: result.body,
      labels: ["type: bug"],
      milestone: 1,
      assignees: [result.assignee],
      owner: result.owner,
      repository: result.repo
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
)
