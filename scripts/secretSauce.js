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
    newPost.publishedOn = date.getFullYear() + '-' + (date.getMonth() +1) + '-' + date.getDate();
    //save object to local storage
    localStorage.setItem('newArticle', JSON.stringify(newPost));
    newPost.previewArticle();
    newPost.jsonView();
    //clear input elements
    $('#submitPost').each(function() {
      this.reset();
    });
    console.log(newPost);
  });
};

newPost.previewArticle = function() {
  $('#preview').html(newPost.author);

};

newPost.jsonView = function() {
  $('#jsonView').text(JSON.stringify(newPost));


};

/*JSON.parse(window.localStorage.getItem('newArticle')) */
$(function(){

  newPost.formProcess();
});
