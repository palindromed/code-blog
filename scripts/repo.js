var repos = {};

repos.all = [];

repos.requestAll = function(callback){

  $.ajax({
    type: 'GET',
    url: 'https://api.github.com/user/repos?sort=updated',
    headers: {Authorization: 'token ' + githubToken }
  }).done(function(data){
    repos.all = data;
  }).done(callback);

};
