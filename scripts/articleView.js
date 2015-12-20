var articleView = {};

articleView.index = function() {
  var _renderAll = function() {
    $articles = $('#articles');
    $articles.show().siblings().hide();
    $('#spinner').hide();
    Article.all.forEach(function(article) {
      $articles.append(articleView.render(article));
    });
  };

  if (articleView.template) {
    _renderAll();
  } else {
    $.get('/views/article.html', function(data, msg, xhr) {
      articleView.template = Handlebars.compile(data);
      _renderAll();
    });
  }

};

articleView.render = function(article) {

  article.daysAgo =
    parseInt((new Date() - new Date(article.publishedOn))/60/60/24/1000);

  article.publishStatus = article.publishedOn ? 'published ' + article.daysAgo + ' days ago' : '(draft)';
  article.authorSlug = util.slug(article.author);
  article.categorySlug = util.slug(article.category);

  return articleView.template(article);
};

articleView.handleFilter = function(){
  $('#category').on('change', function(){
    page('/category/'+ $(this).val());
  });
};



articleView.show = function(articles){
  //make a render function that takes argument of articles.
  articleView.index(articles);

};


/*get blog, empty, append chosen articles SIDE-populate category and author filters*/
