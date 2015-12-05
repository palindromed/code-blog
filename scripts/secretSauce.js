var newPost = {};


newPost.formProcess = function( ) {
  $('#jsonView').hide();
  $('#submitPost').submit(function(event) {
    event.preventDefault();
    //populate newPost object
    newPost.createPost();
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

newPost.createPost = function(){
  newPost.title = $('#title').val();
  newPost.category = $('#category').val();
  newPost.author = $('#author').val();
  newPost.authorUrl = $('#authorUrl').val();
  var date = new Date();
  var day = date.getDate();
  if(day < 10) {
    day = '0'+ day;
  };
  newPost.publishedOn = date.getFullYear() + '-' + (date.getMonth() +1) + '-' + day;
  newPost.body = marked($('#body').val());

}

newPost.previewArticle = function() {
  var source = $('#articleTemplate').html();
  var template = Handlebars.compile(source);
  var compiledHtml = template(newPost);
  $('#preview').append(compiledHtml);


};

newPost.jsonView = function() {
  $('#jsonView').text(JSON.stringify(newPost)).show();


};

/*JSON.parse(window.localStorage.getItem('newArticle')) */
$(function(){
  newPost.formProcess();
});
