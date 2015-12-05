var newPost = {};


newPost.formProcess = function( ) {
  $('#submitPost').submit(function(event) {
    event.preventDefault();
    //populate newPost object
    newPost.category = $('#category').val();
    newPost.title = $('#title').val();
    newPost.author = $('#author').val();
    newPost.authorUrl = $('#authorUrl').val();
    newPost.body = marked($('#body').val());
    var date = new Date();
    console.log(date);
    newPost.publishedOn = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    //save object to local storage
    localStorage.setItem('newArticle', JSON.stringify(newPost));
    //clear input elements
    $('#submitPost').each(function() {
      this.reset();
    });
    console.log(newPost);
  });
};

newPost.previewArticle = function() {

};

/*JSON.parse(window.localStorage.getItem('newArticle')) */
$(function(){
  newPost.previewArticle();
  newPost.formProcess();
});
