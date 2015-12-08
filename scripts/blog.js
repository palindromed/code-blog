'use strict';

var blog = {};

blog.getArticles = function(){

$.ajax({
    url: 'scripts/blogArticles.js',
    type: 'GET',
    dataType: 'text',
    ifModified:true,
    success: function(data, textStatus, jqXHR){
      if(jqXHR.status === 200){
        console.log('Got a good request');
        console.log(typeof data);
        localStorage.Articles = JSON.stringify(eval(data));
        blog.rawData = JSON.parse(localStorage.getItem('Articles'));
        blog.makePosts();
        console.log(typeof blog.rawData);

      } else {
        console.log('Hey, a 304 request');
      }

      console.log('Data: ' + data);
    }
  });



};


blog.makePosts = function(){


  for(var i=0; i < blog.rawData.length; i++){
    //blog.sortArticles();
    var post = blog.rawData[i];

    post.daysBetween = blog.dateDiff(post.publishedOn);
    post.authorSlug = blog.slugify(post.author);
    blog.toHtml(post);
  };

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

blog.toHtml = function(props) {
  var fluffy = new Article(props);

  $.get('/views/articleTemplate.hbs')
    .done(function(data){
      var template = fluffy.template(data);
      var compiledHtml = template(fluffy);
      $('#preview').append(compiledHtml);
      blog.truncateArticles();
    });
};

blog.truncateArticles = function () {
  $('span').hide();
  $('article section p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event){
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};



$(function () {
  blog.getArticles();


});
