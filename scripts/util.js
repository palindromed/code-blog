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
    $('article').show();
    $('.author-filter').children().removeAttr('selected');
    $('.category-filter').children().removeAttr('selected');
    $('.about-section').hide();

  });
};/*
util.filterViewByAuthor = function () {

  var source = $('#author-filter-template').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(blog);
  $('.author-filter-attach').append(compiledHtml);

  $('.author-filter').change(function() {
    $('article').show();
    $('.category-filter').children().removeAttr('selected');
    var $selectedAuthor = $('.author-filter option:selected').val();
    var slugSelected = blog.slugify($selectedAuthor);
    $('span:not(:contains('+ slugSelected +'))').parent().hide();

  });
};

util.filterViewByCategory = function () {
  var source = $('#category-filter-template').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(blog);
  $('.category-filter-attach').html(compiledHtml);

  $('.category-filter').change(function(){
    $('article').show();
    $('.author-filter').children().removeAttr('selected');
    var selectedCategory = $('.category-filter option:selected').val();
    $('article h6:not(:contains('+ selectedCategory+'))').parent().hide();

  });

};
*/
$(function(){
  util.aboutTab();
  util.articleTab();
  //util.filterViewByAuthor();
  //util.filterViewByCategory();
});
