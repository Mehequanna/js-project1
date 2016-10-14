var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  var newSearch = new Search();

  $('#searchButton').click(function(event){
    event.preventDefault();
    var username = $('#username').val();

    newSearch.getRepos(username);
  });
});
