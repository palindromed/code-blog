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
  $('article p p:not(:first-child)').hide();
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
      $('.author-filter option:selected')
        .each(function(){
          $('.category-filter').children().removeAttr('selected');
          //$('article').

        });
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
      $('.category-filter option:selected')
        .each(function(){
          $('.author-filter').children().removeAttr('selected');

        });
    });
};

 //$(item:not(:contains(selectedItem.val()))).(:)

$(function () {
  blog.makePosts();
  blog.truncateArticles();
  blog.filterViewByAuthor();
  blog.filterViewByCategory();

});
