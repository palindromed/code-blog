'use strict';

var repoView = {};

repoView.index = function() {
  repoView.ui();

  var _append = function(repo) {
    $('#about ul').append(repoView.render(repo));
  };

  repos.all.filter(function(repo){
    //TODO: How would you like to filter the repos?
    return !repo.fork
  })
  .forEach(_append);
};

repoView.render = function(repo) {
  //TODO: How would you like to render this?
  return $('<li>').text(repo.full_name)
};

repoView.ui = function() {
  var $about = $('#about');
  var $ul = $about.find('ul');

  $ul.empty();
  $about.fadeIn().siblings().hide();
};
