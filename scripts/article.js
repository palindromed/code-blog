'use strict';

var Article = function(props){
  this.author = props.author;
  this.title = props.title;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
  this.authorUrl = props.authorUrl;
  this.daysBetween = props.daysBetween;
  this.category = props.category;
  this.authorSlug = this.slugify(this.author);
};

Article.prototype.slugify = function (string) {
  return string.replace(/\s/g, '-')



};
