'use strict';
var blog = {};

var makePosts = function(){
  for(var i=0; i < blog.rawData.length; i++){
    var post = new Article(blog.rawData[i]);
    console.log(post);
    post.toHtml();
  }

};
