var reposController = {};

reposController.index = function(){
  repos.requestAll(repoView.index);
};
