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

util.practiceHandleBars = function () {
  var source = $('#practiceTemplate').html();
  var template = Handlebars.compile(source);
  var html = template({firstname: 'Hannah'});
  $('#practice').append(html);
};

$(function(){
  util.aboutTab();
  util.articleTab();
  util.practiceHandleBars();
});
