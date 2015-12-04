'use strict';

var util = {};

util.aboutTab = function(){
  $('.about-section').hide();

  $('ul').on('click', '.about-tab', function(event){
    event.preventDefault();
    $('main').hide();
    $('.about-section').fadeIn();
  });
};

util.articleTab = function () {
  $('ul').on('click', '.article-tab', function(event){
    event.preventDefault();
    $('main').show();
    $('.about-section').hide();

  });
};
util.filterViewByAuthor = function () {

  var source = $('#author-filter-template').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(blog);
  $('.author-filter-attach').html(compiledHtml);

  $('.author-filter').change(function() {
    $('article').show();
    $('.category-filter').children().removeAttr('selected');
    var $selectedAuthor = $('.author-filter option:selected').val();
    $('article h5:not(:contains("'+ $selectedAuthor +'"))').parent().hide();

  });
};

util.filterViewByCategory = function () {
  var source = $('#category-filter-template').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(blog);
  $('.category-filter-attach').html(compiledHtml);

};
$(function(){
  util.aboutTab();
  util.articleTab();
  util.filterViewByAuthor();
  util.filterViewByCategory();
});
