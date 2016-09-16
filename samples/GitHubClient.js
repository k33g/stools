/** this is a wip **?
/*
see here for the last version: https://github.com/k33g/simple-js-octokit
*/

//"use strict";
const fetch = require('node-fetch');
// https://github.com/bitinn/node-fetch
// npm install node-fetch --save

class HttpException extends Error {
  constructor({message, status, statusText, url}) {
    super(message);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
    //Error.captureStackTrace(this, this.constructor.name)
  }
}

class GitHubClient {
  constructor({baseUri, token}) {
    this.baseUri = baseUri
    this.credentials = token !== null && token.length > 0 ? "token" + ' ' + token : null
    this.headers = {
      "Content-Type": "application/json",
      "Accept": "application/vnd.github.v3.full+json",
      "Authorization": this.credentials
    }
  }

  getData({path}) {
    let _response = {}
    return fetch(this.baseUri + path, {
      method: 'GET',
      headers: this.headers
    })
    .then(response => {
      // save reference of response / then we can access to headers
      _response = response
      // if response is ok transform response.text to json object
      // else throw error
      if (response.ok) {
        return response.json()
      } else {
        throw new HttpException({
          message: "HttpException",
          status:response.status,
          statusText:response.statusText,
          url: response.url
        });
      }
    })
    .then(jsonData => {
      // add json data to _response
      _response.data = jsonData;
      return _response;
    })
  }

  deleteData({path}) {
    let _response = {}
    return fetch(this.baseUri + path, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(response => {
      // save reference of response / then we can access to headers
      _response = response
      // if response is ok transform response.text to json object
      // else throw error
      if (response.ok) {
        return response.json()
      } else {
        throw new HttpException({
          message: "HttpException",
          status:response.status,
          statusText:response.statusText,
          url: response.url
        });
      }
    })
    .then(jsonData => {
      // add json data to _response
      _response.data = jsonData;
      return _response;
    })
  }

  postData({path, data}) {
    let _response = {}
    return fetch(this.baseUri + path, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then(response => {
      _response = response
      // if response is ok transform response.text to json object
      // else throw error
      if (response.ok) {
        return response.json()
      } else {
        throw new HttpException({
          message: "HttpException",
          status:response.status,
          statusText:response.statusText,
          url: response.url
        });
      }
    })
    .then(jsonData => {
      _response.data = jsonData;
      return _response;
    })
  }

  putData({path, data}) {
    let _response = {}
    return fetch(this.baseUri + path, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    .then(response => {
      _response = response
      // if response is ok transform response.text to json object
      // else throw error
      if (response.ok) {
        return response.json()
      } else {
        throw new HttpException({
          message: "HttpException",
          status:response.status,
          statusText:response.statusText,
          url: response.url
        });
      }
    })
    .then(jsonData => {
      _response.data = jsonData;
      return _response;
    })
  }

  // get user data
  fetchUser({handle}) {
    return this.getData({path:`/users/${handle}`})
    .then(response => {
      return response.data;
    });
  }
  //https://developer.github.com/v3/users/administration/#suspend-a-user
  suspendUser({handle}) {
    this.headers["Content-Length"] = 0;
    return fetch(this.baseUri + `/users/${handle}/suspended`, {
      method: 'PUT',
      headers: this.headers,
      body: null
    })
    .then(response => {
      delete this.headers["Content-Length"];
      return response
    })
  }

  unsuspendUser({handle}) {
    //this.headers["Content-Length"] = 0;
    return fetch(this.baseUri + `/users/${handle}/suspended`, {
      method: 'DELETE',
      headers: this.headers,
    })
    .then(response => {
      return response
    })
  }



  /*
    Repositories
    TODO:
    - fetch
    - refactoring
  */

  // GET /users/:username/repos
  fetchUserRepositories({handle}) {
    return this.getData({path:`/users/${handle}/repos`})
    .then(response => {
      return response.data;
    });
  }

  // GET /orgs/:org/repos
  fetchOrganizationRepositories({organization}) {
    return this.getData({path:`/orgs/${organization}/repos`})
    .then(response => {
      return response.data;
    });
  }

  createPublicRepository({name, description}) {
    return this.postData({path:`/user/repos`, data:{
      name: name,
      description: description,
      private: false,
      has_issue: true,
      has_wiki: true,
      auto_init: true
    }}).then(response => {
      return response.data;
    });
  }

  createPrivateRepository({name, description}) {
    return this.postData({path:`/user/repos`, data:{
      name: name,
      description: description,
      private: true,
      has_issue: true,
      has_wiki: true,
      auto_init: true
    }}).then(response => {
      return response.data;
    });
  }

  createPublicOrganizationRepository({name, description, organization}) {
    return this.postData({path:`/orgs/${organization}/repos`, data:{
      name: name,
      description: description,
      private: false,
      has_issue: true,
      has_wiki: true,
      auto_init: true
    }}).then(response => {
      return response.data;
    });
  }

  createPrivateOrganizationRepository({name, description, organization}) {
    return this.postData({path:`/orgs/${organization}/repos`, data:{
      name: name,
      description: description,
      private: true,
      has_issue: true,
      has_wiki: true,
      auto_init: true
    }}).then(response => {
      return response.data;
    });
  }

  /* Organizations
    ### Organization Administration

    #### Create an organization:

      - only for GitHub Enterprise
      - `POST /admin/organizations`
      - see https://developer.github.com/v3/enterprise/orgs/#create-an-organization

      ```
      login	string	Required. The organization's username.
      admin	string	Required. The login of the user who will manage this organization.
      profile_name	string	The organization's display name.
      ```
    TODO:
    https://developer.github.com/v3/orgs/

  */
  createOrganization({login, admin, profile_name}) {
    return this.postData({path:`/admin/organizations`, data:{
      login: login,
      admin: admin,
      profile_name: profile_name
    }}).then(response => {
      return response.data;
    });
  }

  /* Teams
    ### Teams

    #### Create a Team

    See https://developer.github.com/v3/orgs/teams/#create-team
    POST /orgs/:org/teams

    :warning: In order to create a team, the authenticated user must be a member of :org.
    -> or you have to be the administrator

  */
  createTeam({org, name, description, repo_names, privacy, permission}) {
    return this.postData({path:`/orgs/${org}/teams`, data:{
      name: name,
      description: description,
      repo_names: repo_names,
      privacy: privacy, // secret or closed
      permission: permission // pull, push, admin
    }}).then(response => {
      return response.data;
    });
  }
  // list of the teams of the organization
  // See https://developer.github.com/v3/orgs/teams/#list-teams
  fetchTeams({org}) {
    return this.getData({path:`/orgs/${org}/teams`})
    .then(response => {
      return response.data;
    });
  }

  getTeamByName({org, name}) {
    return this.fetchTeams({org:org})
    .then(teams => {
      return teams.find(team => {
        return team.name = name
      })
    })
  }

  // Add team membership
  // PUT /teams/:id/memberships/:username
  addTeamMembership({teamId, userName, role}) {
    return this.putData({path:`/teams/${teamId}/memberships/${userName}`, data:{
      role: role // member, maintener
    }}).then(response => {
      return response.data;
    });
  }

  /* Milestones

  */
  // GET /repos/:owner/:repo/milestones

  fetchMilestones({owner, repository}){
    return this.getData({path:`/repos/${owner}/${repository}/milestones`})
    .then(response => {
      return response.data;
    });
  }

  getMilestoneByTitle({title, owner, repository}) {
    return this.fetchTeams({org:org})
    .then(milestones => {
      return milestones.find(milestone => {
        return milestone.title = title
      })
    })
  }

  createMilestone({title, state, description, due_on, owner, repository}) {
    return this.postData({path:`/repos/${owner}/${repository}/milestones`, data:{
      title: title,
      state: state,
      description: description,
      due_on: due_on
    }}).then(response => {
      return response.data;
    });
  }

  /* Labels

  */
  createLabel({name, color, owner, repository}) {
    return this.postData({path:`/repos/${owner}/${repository}/labels`, data:{
      name: name,
      color: color
    }}).then(response => {
      return response.data;
    });
  }

  /* Issues

  */
  createIssue({title, body, labels, milestone, assignees, owner, repository}) {
    console.log(title, body, labels, milestone, assignees, owner, repository)
    return this.postData({path:`/repos/${owner}/${repository}/issues`, data:{
      title, body, labels, milestone, assignees, owner, repository
    }}).then(response => {
      return response.data;
    });
  }

} // end of class


//module.exports = GitHubClient
module.exports = {
  GitHubClient: GitHubClient
}
