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
  var options = $.map(blog.rawData, function(post, idx) {
    var optionTag = $('<option>').val(post.author).text(post.author);
    optionTag.data('rawdata', post);
    return optionTag;
  });

  $.fn.append.apply($('.author-filter'), options)
    .change(function() {
      $('article').show();
      $('.category-filter').children().removeAttr('selected');
      var $selectedAuthor = $('.author-filter option:selected').val();
      $('article h5:not(:contains("'+ $selectedAuthor +'"))').parent().hide();

    });
};

util.filterViewByCategory = function () {
  var dataArray = $.map(blog.rawData, function(post, idx) {
    var optionTag = $('<option>').val(post.category).text(post.category);
    optionTag.data('rawdata', post);
    return optionTag;

  });
  //$.unique(dataArray);
  $.fn.append.apply($('.category-filter'), dataArray)
    .change(function() {
      $('article').show();
      var $selectedCategory = $('.category-filter option:selected').val();
      $('.author-filter').children().removeAttr('selected');
      $('article h6:not(:contains('+ $selectedCategory +'))').parent().hide();
    });
};
$(function(){
  util.aboutTab();
  util.articleTab();
  util.filterViewByAuthor();
  util.filterViewByCategory();
});
