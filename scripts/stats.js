var stats = {};
stats.posts = JSON.parse(localStorage.getItem('Articles'));

stats.checkBlog = function() {

  var articleCount = stats.countArticles();
  $('#num-articles').text('Article Count: ' + articleCount);
  //stats.renderStats();
  stats.stripHtml();


};

stats.countArticles = function() {
  return stats.posts.length;
};

stats.stripHtml = function(){
  var words = [];
  stats.posts.forEach(function(value, i){

    var html = value.body;
    var div = document.createElement('div');
    div.innerHTML = html;
    var text = div.textContent || div.innerText || '';
    value.wordCount = stats.countWords(text);
    //console.log(value.wordCount);


  });
};

stats.countWords = function(words){

  var wordList = words.split(' ');
  return wordList.length;


}


stats.renderStats = function(){


};
$(function(){
  stats.checkBlog();

});
