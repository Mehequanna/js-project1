var Search = require('./../js/search.js').searchModule;

var printDetails = function(avatar_url, name, login, html_url, location, public_repos, repos_url, followers) {
  $('#userDetails').append(
    '<a href="'+html_url+'"><img src="'+avatar_url+'" alt="User Avatar" id="userImage" /></a>'+
    '<h2>'+name+'</h2>' +
    '<h4>'+login+'</h4>' +
    '<h4>Located in: '+location+'</h4>' +
    '<a href="'+repos_url+'"><h5>Total repos: '+public_repos+'</h5></a>' +
    '<h5># of Followers: '+followers+'</h5>'
  );
};

var printRepos = function(name, html_url, description, language){
  $('#userDetails').append(
    '<div class="userRepo">'+
      '<a href="'+html_url+'"><h3>'+name+'</h3></a>'+
      '<h4>Description: '+description+'</h4>'+
      '<h4>Most Used Langauge: '+language+'</h4>'+
    '</div>'
  );
};

$(document).ready(function() {
  var newSearch = new Search();

  $('#searchButton').click(function(event){
    event.preventDefault();
    var username = $('#username').val();

    newSearch.getDetails(username, printDetails);
    newSearch.getRepos(username, printRepos);
  });
});
