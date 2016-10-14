/*jshint esversion: 6 */ //this gets rid of a jshint flag

var apiKey = require('./../.env').apiKey;

function Search() {
}

Search.prototype.getDetails = function (username, printDetails, detailsError) {
  $.get('https://api.github.com/users/'+username+'?access_token=' + apiKey).then(function(response){
    printDetails(response.avatar_url, response.name, response.login, response.html_url, response.location, response.public_repos, response.followers);
  }).fail(function(error){
    detailsError();
  });
};

Search.prototype.getRepos = function (username, printRepos, reposError) {
  $.get('https://api.github.com/users/'+username+'/repos?access_token=' + apiKey).then(function(response){
    for (var repo of response) {
      var description = repo.description;
      if (description === null) {
        description = "No Description";
      }
      var language = repo.language;
      if (language === null) {
        language = "No Language";
      }
      printRepos(repo.name, repo.html_url, description, language);
    }
  }).fail(function(error){
    reposError();
  });
};

exports.searchModule = Search;
