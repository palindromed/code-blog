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
  $('ul').on('click', '.tab', function(event){
    event.preventDefault();
    $('main').show();
    $('.about-section').hide();

  });
};

$(function(){
  util.aboutTab();
  util.articleTab();
});
