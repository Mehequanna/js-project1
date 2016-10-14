var Search = require('./../js/search.js').searchModule;

var printDetails = function(avatar_url, name, login, html_url, location, public_repos, followers) {
  $('#userDetails').html(
    '<a href="'+html_url+'"><img src="'+avatar_url+'" alt="User Avatar" id="userImage" /></a>'+
    '<h2>'+name+'</h2>' +
    '<h4>'+login+'</h4>' +
    '<h4>'+location+'</h4>' +
    '<h5>'+public_repos+' repos</h5>' +
    '<h5>'+followers+' followers</h5>'
  );
};

var printRepos = function(name, html_url, description, language){
  $('#userRepos').append(
    '<div class="userRepo col-sm-4">'+
      '<a href="'+html_url+'"><h3>'+name+'</h3></a>'+
      '<h5>Description:</h5><p>'+description+'</p>'+
      '<h5>Most Used Langauge:</h5><p>'+language+'</p>'+
    '</div>'
  );
};

var detailsError = function() {
  $('#userDetails').html(
    '<h2>Sorry, username not found!</h2>'
  );
};

var reposError = function() {
  $('#userRepos').html(
    '<h4>Sorry, no repos found!</h4>'
  );
};

$(document).ready(function() {
  var newSearch = new Search();

  $('#searchButton').click(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#userRepos').children().remove();
    newSearch.getDetails(username, printDetails, detailsError);
    newSearch.getRepos(username, printRepos, reposError);
  });
});
