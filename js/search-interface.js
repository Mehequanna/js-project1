var Search = require('./../js/search.js').searchModule;

var printDetails = function(name) {
  $('#userDetails').html('<h2>'+name+'</h2>');
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
