var newPost = {};


$('#submitPost').submit(function(event) {
  alert('submit Post!');
  event.preventDefault();
  newPost.category = $('#category').val();
  newPost.title = $('#title').val();
  newPost.author = $('#author').val();
  newPost.authorUrl = $('#authorUrl').val();
  newPost.body = $('#body').val();
  //newPost.publishedOn = $('#publishedOn').val();
  localStorage.setItem('newArticle', JSON.stringify(newPost));
  console.log(newPost);
});


/*JSON.parse(window.localStorage.getItem('newArticle')) */
