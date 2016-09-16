"use strict";
const assert = require('chai').assert;

const Validation = require('../src/Validation.js');


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


describe("Validate this stuff", () => {
  let check = Validation.of(
    (title) =>
      (body) =>
        (owner) =>
          (repo) =>
            (assignee) => { return {title, body, owner, repo, assignee} } // the result
  )
  .ap(checkTitle("Huston?"))
  .ap(checkBody("Problem!"))
  .ap(checkOwner("k33g"))
  .ap(checkRepo("bob"))
  .ap(checkAssignee("spocky"))
  .value

  console.log(check)

  it("should return a lot of things", () => {

    assert.equal(check.title, "Huston?")
    assert.equal(check.body, "Problem!")
    assert.equal(check.owner, "k33g")
    assert.equal(check.repo, "bob")
    assert.equal(check.assignee, "spocky")

  });
});

describe("You mustt have 5 errors", () => {
  let check = Validation.of(
    (title) =>
      (body) =>
        (owner) =>
          (repo) =>
            (assignee) => { return {title, body, owner, repo, assignee} } // the result
  )
  .ap(checkTitle())
  .ap(checkBody())
  .ap(checkOwner())
  .ap(checkRepo())
  .ap(checkAssignee())
  .value

  console.log(check)

  it("should be an array of 5 items", () => {

    assert.equal(check.length, 5)
  });
});
