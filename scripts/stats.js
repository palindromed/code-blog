var stats = {};
stats.letters = [];

stats.runStats = function() {
  stats.posts = stats.posts || JSON.parse(localStorage.getItem('Articles'));
  stats.articleCount = stats.countArticles();
  stats.stripHtml();
  stats.totalWordCount = stats.reduceAddArray(stats.words);
  var totalLetters = stats.reduceAddArray(stats.letters);

  stats.totalAverage = stats.getAverages(stats.totalWordCount, stats.articleCount);
  stats.averageWordLength = stats.getAverages(totalLetters, stats.totalWordCount);
  stats.uniqueAuthor();
  stats.wordLengthForPosts();


  stats.renderStats();
};

stats.wordLengthForPosts = function(){
  stats.posts.map(function getWordLength(post){
    post.average = parseFloat(stats.getAverages(post.letterCount, post.wordCount));
  });
};


stats.reduceAddArray = function(array1){
  return array1.reduce(function reduceAdd(a, b) {
    return a + b;
  });
};

stats.countArticles = function() {
  return stats.posts.length;
};

stats.stripHtml = function(){
  stats.words = [];
  stats.posts.forEach(function noHtml(value, i){

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
  return parseFloat(num / den).toFixed(2);


};

stats.countLetters = function(wordList){

  var counter = 0;
  wordList.forEach(function letterForEach(item){
    counter += item.length;

  });
  stats.letters.push(counter);
  return counter;

};


stats.countWords = function(words){
  return words.length;
};

stats.uniqueAuthor = function() {
  stats.authorNames = [];

  return stats.posts.reduce(function filterAuthors(p, c) {
    if (p.author.indexOf(c) < 0) stats.authorNames.push(c);
    return p;
  });
};


stats.renderStats = function(){
  $('#num-authors').text('Author Count: ' + stats.authorNames.length);

  $('#num-articles').text('Article Count: ' + stats.articleCount);


  var source = $('#wordcount-template').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(stats);
  $('#author-stats').append(compiledHtml);
  $('#num-words').text('Total word count: ' + stats.totalWordCount + ' Average Words per post: '+ stats.totalAverage +
    'Average word length across all articles: '+ stats.averageWordLength);

};
$(function(){
  stats.runStats();

});
