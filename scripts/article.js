'use strict';

var Article = function(props){
  this.author = props.author;
  this.title = props.title;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
  this.authorUrl = props.authorUrl;
  this.daysBetween = props.daysBetween;
  this.category = props.category;
};

Article.prototype.toHtml = function () {
  var $clone = $('.template').filter(':first').clone(true).removeClass('template');
  var authorInfo = 'By  <a href="'+ this.authorUrl + '" ><em>'+ this.author + '</em></a> published about ' + this.daysBetween + ' days ago.';
  $clone.find('.about').html(authorInfo);
  $clone.find('p').html(this.body);
  $clone.find('.title').html(this.title);
  $('.main').append($clone);
};
