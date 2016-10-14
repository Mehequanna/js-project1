var Search = require('./../js/search.js').searchModule;

var printDetails = function(avatar_url, name, login, html_url, location, public_repos, repos_url, followers) {
  $('#userDetails').html(
    '<a href="'+html_url+'"><img src="'+avatar_url+'" alt="User Avatar" id="userImage" /></a>'+
    '<h2>'+name+'</h2>' +
    '<h4>'+login+'</h4>' +
    '<h4>Located in: '+location+'</h4>' +
    '<a href="'+repos_url+'"><h5>Total repos: '+public_repos+'</h5></a>' +
    '<h5># of Followers: '+followers+'</h5>'
  );
};

$(document).ready(function() {
  var newSearch = new Search();

  $('#searchButton').click(function(event){
    event.preventDefault();
    var username = $('#username').val();

    newSearch.getDetails(username, printDetails);
    newSearch.getRepos(username);
  });
});
