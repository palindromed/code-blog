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
  if (a.publishedOn < b.publishedOn) {
    return 1;
  }
  if (a.publishedOn > b.publishedOn) {
    return -1;
  }
  return 0;
});
}

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


    var year = parseInt(date1.slice(0, [4]));
    var month = parseInt(date1.slice(5, [7]));
    var day = parseInt(date1.slice(-2));
    var monthDiff = (mm-month) * 30;
    var dayDiff = (dd-day) + monthDiff;
    return(dayDiff);

};

/*blog.truncateArticles = function () {
  $('article p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event){
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });

}*/
/*blog.mainNav = function () {
  $('#' + $(this).data(content)).fadeIn();//show section by id =tab-content and start hidden
  // body...
  $('main-nav .tab-first')
}*/
// ms /1000/60/60/24
$(function () {
  blog.makePosts();
  blog.truncateArticles();
});
