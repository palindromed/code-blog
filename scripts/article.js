'use strict';
(function() {


  var Article = function(props){
    this.author = props.author;
    this.title = props.title;
    this.body = props.body;
    this.publishedOn = props.publishedOn;
  }
  Article.prototype.toHtml = function () {
    $('h1.postTitle').text = this.title;
    $('p.postInfo').text =  'By ' this.author + ' on ' + this.publishedOn;
    $('p.postBody').text = this.body;

  };
})();
