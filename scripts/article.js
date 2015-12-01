'use strict';

var Article = function(props){
  this.author = props.author;
  this.title = props.title;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
};

Article.prototype.toHtml = function () {
  var $clone = $('.template').clone(true);
  $clone.find('.author').html(this.author);
  $clone.find('.body').html(this.body);
  $clone.find('.title').html(this.title);
  //$clone.find('.body .title .template .author').removeClass('.template');
  $('main').html($clone);
};
