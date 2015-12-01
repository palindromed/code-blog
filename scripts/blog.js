'use strict';
var blog = {};

var makePosts = function(){
  for(var i=0; i < blog.rawData.length; i++){
    var post = blog.rawData[i];
    //console.log(post.publishedOn);
    post.daysBetween = dateDiff(post.publishedOn);
    var posted =new Article(post);
    posted.toHtml();
  }

};
var dateDiff = function(date1){
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


  var year = parseInt(date1.slice(0, [4]));
  var month = parseInt(date1.slice(5, [7]));
  var day = parseInt(date1.slice(-2));
  var monthDiff = (mm-month) * 30;
  var dayDiff = (dd-day) + monthDiff;
  console.log(dayDiff);
  return(dayDiff);

};
