'use strict';

var blog = {};

blog.makePosts = function(){
  for(var i=0; i < blog.rawData.length; i++){
    blog.sortArticles();
    var post = blog.rawData[i];
    post.daysBetween = blog.dateDiff(post.publishedOn);
    var posted =new Article(post);
    posted.toHtml();
  }
};

blog.sortArticles = function () {
  blog.rawData.sort(function (a, b) {
    if (a.publishedOn < b.publishedOn) { return 1;}
    if (a.publishedOn > b.publishedOn) { return -1;}
    return 0;
  });
};

blog.dateDiff = function(date1){
  return(Math.floor((new Date() - new Date(date1)) / 86400000));
};

blog.truncateArticles = function () {
  $('article section p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event){
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};

blog.filterViewByAuthor = function () {
  var options = $.map(blog.rawData, function(post, idx) {
    var optionTag = $('<option>').val(post.author).text(post.author);
    optionTag.data('rawdata', post);
    return optionTag;
  });

  $.fn.append.apply($('.author-filter'), options)
    .change(function() {
      $('article').show();
      $('.category-filter').children().removeAttr('selected');
      var $hoo = $('.author-filter option:selected').val();
      $('article h5:not(:contains("'+ $hoo +'"))').parent().hide();

    });
};

blog.filterViewByCategory = function () {
  var dataArray = $.map(blog.rawData, function(post, idx) {
    var optionTag = $('<option>').val(post.category).text(post.category);
    optionTag.data('rawdata', post);
    return optionTag;
  });

  $.fn.append.apply($('.category-filter'), dataArray)
    .change(function() {
      $('article').show();
      var $boo = $('.category-filter option:selected').val();
      $('.author-filter').children().removeAttr('selected');
      $('article h6:not(:contains('+ $boo +'))').parent().hide();
    });
};

$(function () {
  blog.makePosts();
  blog.truncateArticles();
  blog.filterViewByAuthor();
  blog.filterViewByCategory();

});
