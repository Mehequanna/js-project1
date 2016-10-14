/*jshint esversion: 6 */ //this gets rid of a jshint flag

var apiKey = require('./../.env').apiKey;

function Search() {
}

Search.prototype.getDetails = function (username, printDetails) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    console.log(response);
    printDetails(response.name);
    console.log(response.name);
    console.log(response.login);
    console.log(response.html_url);
    console.log(response.location);
    console.log(response.public_repos);
    console.log(response.repos_url);
    console.log(response.followers);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

Search.prototype.getRepos = function (username) {
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for (var repo of response) {
      console.log(repo.name);
      console.log(repo.html_url);
      console.log(repo.description);
      console.log(repo.language);
      console.log(repo.created_at);
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.searchModule = Search;
