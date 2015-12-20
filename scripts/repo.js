var repos = {};

repos.all = [];

repos.requestAll = function(callback){

  $.ajax({
    type: 'GET',
    url: '/github/user/repos?sort=updated',

  }).done(function(data){
    repos.all = data;
  }).done(callback);

};
