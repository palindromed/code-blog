'use strict';

var blog = {};

blog.makePosts = function(){
  for(var i=0; i < blog.rawData.length; i++){
    blog.sortArticles();
    var post = blog.rawData[i];
    post.daysBetween = blog.dateDiff(post.publishedOn);
    post.authorSlug = blog.slugify(post.author);
    new Article(post);
  }
  blog.toHtml();
};

blog.slugify = function (string) {
  return string.replace(/\s/g , '-');
};

blog.dateDiff = function(date1){
  return Math.floor((new Date() - new Date(date1)) / 86400000);
};


blog.sortArticles = function () {
  blog.rawData.sort(function (a, b) {
    if (a.publishedOn < b.publishedOn) { return 1;}
    if (a.publishedOn > b.publishedOn) { return -1;}
    return 0;
  });
};


blog.toHtml = function () {
  var source = $('#articleTemplate').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(blog);
  $('.article-collection').html(compiledHtml);
};


blog.truncateArticles = function () {
  $('article section p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event){
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};



$(function () {
  blog.makePosts();
  blog.truncateArticles();



});
