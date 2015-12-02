'use strict';

var util = {};

util.aboutTab = function(){
  $('.about-section').hide();
  $('li').on('click', '.about-tab', function(event){
    event.preventDefault();
    $('main').hide();
    $('.about-section').fadeIn();
  });
};

util.articleTab = function () {
  $('li').on('click', '.tab', function(event){
    $('main').show();
    $('.about-section').hide();

  });

};

$(function(){
  util.aboutTab();
});
