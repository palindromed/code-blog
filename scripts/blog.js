'use strict';

var blog = {};

blog.makePosts = function(){
  for(var i=0; i < blog.rawData.length; i++){
    var post = blog.rawData[i];
    post.daysBetween = blog.dateDiff(post.publishedOn);
    var posted =new Article(post);
    posted.toHtml();
  }
};

blog.dateDiff = function(date1){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd='0'+dd;
  }

  if(mm<10) {
    mm='0'+mm;
  }

  today = yyyy +'-'+ mm+'-'+dd;

  var msDiff = today - date1;
  var dayDiff = msDiff / ;
  return(dayDiff);

};
// ms /1000/60/60/24
$(function () {
  blog.makePosts();
});
