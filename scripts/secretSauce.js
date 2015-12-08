var newPost = {};

newPost.formProcess = function( ) {
  $('#jsonView').hide();
  $('#submitPost').submit(function(event) {
    event.preventDefault();

    newPost.title = $('#title').val();
    newPost.category = $('#category').val();
    newPost.author = $('#author').val();
    newPost.authorUrl = $('#authorUrl').val();

    newPost.publishedOn = newPost.dateString();
    newPost.body = marked($('#body').val());

    $('#submitPost').each(function() {
      this.reset();
    });


    localStorage.setItem('newArticle', JSON.stringify(newPost));
    newPost.previewArticle();
  });
};

newPost.dateString = function() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  if(day < 10) {
    day = '0'+ day;
  };
  if(month < 10){
    month = '0'+ (month);
  };
  return date.getFullYear() + '-' + month + '-' + day;
};

newPost.previewArticle = function() {
  var fluffy = new Article(newPost);

  $.get('/views/articleTemplate.hbs')
    .done(function(data){
      var template = fluffy.template(data);
      var compiledHtml = template(fluffy);
      $('#preview').append(compiledHtml);
      $('#jsonView').text(JSON.stringify(newPost)).show();
    });
};



$(function(){
  newPost.formProcess();
});
