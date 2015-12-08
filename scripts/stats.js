var stats = {};
var newData = JSON.parse(localStorage.getItem('Articles'));

stats.checkBlog = function() {

  var articleCount = stats.countArticles();
  $('#num-articles').text('Article Count: ' + articleCount);
  //stats.renderStats();


};

stats.countArticles = function() {
  return newData.length;
};



stats.renderStats = function(){


};
$(function(){
  stats.checkBlog();

});
