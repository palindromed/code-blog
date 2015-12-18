var articleController = {};

articleController.index = function() {
  Article.loadAll(articleView.index);
};

articleController.category = function(ctx, next) {
  var categoryData = function(data){
    console.log('in categoryData callback');
    console.log(data);
    ctx.articles = data;
    next();
  };

  Article.findByCategory(ctx.params.category, categoryData);
  console.log(ctx);
};

articleController.author = function(ctx, next) {
  console.log(ctx);
};

articleController.show = function(ctx, next) {
  //show action
  console.log(ctx);
};
