'use strict';

var Article = function(props){
  this.author = props.author;
  this.title = props.title;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
  this.authorUrl = props.authorUrl;
  this.daysBetween = props.daysBetween;
};

Article.prototype.toHtml = function () {
  var $clone = $(' .template').filter(':first').clone(true);
  $clone.find('.author').html(this.author);
  $clone.find('.body').html(this.body);
  $clone.find('.title').html(this.title);
  $clone.find('a[href]').attr('href', this.authorUrl);
  $('.main').append($clone);
};
