'use strict';

var Article = function(props){
  this.author = props.author;
  this.title = props.title;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
};

Article.prototype.toHtml = function () {

};
