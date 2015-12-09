var stats = {};


stats.checkBlog = function() {
  stats.posts = stats.posts || JSON.parse(localStorage.getItem('Articles'));
  stats.articleCount = stats.countArticles();
  stats.stripHtml();
  stats.totalWords();
  stats.uniqueAuthor();

  //stats.getAverages(arg1, arg2);

  stats.renderStats();
};

stats.totalWords = function(){
  stats.totalWordCount = stats.words.reduce(function(a, b){
    return a + b;
  });
};

stats.countArticles = function() {
  return stats.posts.length;
};

stats.stripHtml = function(){
  stats.words = [];
  stats.posts.forEach(function(value, i){

    var html = value.body;
    var div = document.createElement('div');
    div.innerHTML = html;
    var text = div.textContent || div.innerText || '';

    var wordsForCounting = text.split(' ');
    value.wordCount = stats.countWords(wordsForCounting);
    value.letterCount = stats.countLetters(wordsForCounting);
    stats.words.push(value.wordCount);
  });
};

stats.getAverages = function(num, den){
  return num / den;

};

stats.countLetters = function(wordList){

  var counter = 0;
  wordList.forEach(function(item){
    counter += item.length;
  });
  return counter;
};


stats.countWords = function(words){
  return words.length;
};

stats.uniqueAuthor = function() {
  stats.authorNames = [];

  return stats.posts.reduce(function(p, c) {
    if (p.author.indexOf(c) < 0) stats.authorNames.push(c);
    return p;
  });
};


stats.renderStats = function(){
  $('#num-articles').text('Article Count: ' + stats.articleCount);

  var source = $('#wordcount-template').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(stats);
  $('#num-articles').append(compiledHtml);

  $('#num-words').text('Total word count: ' + stats.totalWordCount);

};
$(function(){
  stats.checkBlog();

});
