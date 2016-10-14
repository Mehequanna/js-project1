/*jshint esversion: 6 */ //this gets rid of a jshint flag

var apiKey = require('./../.env').apiKey;

function Search() {
}

Search.prototype.getDetails = function (username, printDetails) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    printDetails(response.avatar_url, response.name, response.login, response.html_url, response.location, response.public_repos, response.repos_url, response.followers);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

Search.prototype.getRepos = function (username, printRepos) {
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for (var repo of response) {
      printRepos(repo.name, repo.html_url, repo.description, repo.language);
      console.log(repo.created_at);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
